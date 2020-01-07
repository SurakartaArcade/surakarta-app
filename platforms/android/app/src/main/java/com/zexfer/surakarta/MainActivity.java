package com.zexfer.surakarta;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import androidx.lifecycle.ViewModelProviders;
import androidx.viewpager2.adapter.FragmentStateAdapter;

import com.zexfer.surakarta.databinding.ActivityMainBinding;
import com.zexfer.surakarta.dialogs.PlayerSourceDialogFragment;
import com.zexfer.surakarta.gui.OfflineConfigChooserFragment;
import com.zexfer.surakarta.gui.OnlineConfigChooserFragment;
import com.zexfer.surakarta.plugins.gameconfig.GameConfig;
import com.zexfer.surakarta.viewmodels.GameConfigViewModel;

public class MainActivity extends AppCompatActivity
        implements View.OnClickListener,
            PlayerSourceDialogFragment.PlayerSourceListener {

    private static final int NUM_CONFIGS = 2;

    private ActivityMainBinding mViewBinding;

    private GameConfigViewModel mGameConfig;

    private FragmentStateAdapter mConfigSlideAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mViewBinding = DataBindingUtil.setContentView(this, R.layout.activity_main);
        setSupportActionBar(mViewBinding.appbar.mainToolbar);

        mConfigSlideAdapter = new ConfigSlideFragmentAdapter(this);
        mViewBinding.appbar.appbarViewpager.setAdapter(mConfigSlideAdapter);
        mViewBinding.appbar.appbarViewpager.setUserInputEnabled(false);
        mViewBinding.playButton.setOnClickListener(this);

        mGameConfig = ViewModelProviders.of(this).get(GameConfigViewModel.class);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.action_toggle:
                final int currentConfigView = mViewBinding.appbar.appbarViewpager.getCurrentItem();
                final int newConfigView = (currentConfigView == 0) ? 1 : 0;
                mViewBinding.appbar.appbarViewpager.setCurrentItem(newConfigView);

                if (newConfigView == 0) {
                    mGameConfig.setMode(GameConfig.MODE_OFFLINE);
                } else {
                    mGameConfig.setMode(GameConfig.MODE_ONLINE);
                }

                return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.red_player_toggle_button:
                showPlayerSourceDialog(R.id.red_player_toggle_button);
                break;
            case R.id.black_player_toggle_button:
                showPlayerSourceDialog(R.id.black_player_toggle_button);
                break;
            case R.id.play_button:
                Intent playIntent = new Intent(this, SurakartaActivity.class);
                startActivity(playIntent);
                break;
        }
    }

    @Override
    public void onPlayerSourceChosen(int source, int sourceViewId) {
        if (sourceViewId == R.id.red_player_toggle_button) {
            mGameConfig.setRedPlayerSource(source);
        } else {
            mGameConfig.setBlackPlayerSource(source);
        }

        ImageView sourceView = findViewById(sourceViewId);

        if (sourceView == null) {
            return;
        }

        switch (source) {
            case PlayerSource.LOCAL:
                sourceView.setImageResource(R.drawable.ic_person_colored);
                break;
            case PlayerSource.COMPUTER:
                sourceView.setImageResource(R.drawable.ic_cpu_colored);
                break;
        }
    }

    private void showPlayerSourceDialog(int id) {
        PlayerSourceDialogFragment.newInstance(
                id,
                id == R.id.red_player_toggle_button ?
                        mGameConfig.getRedPlayerSource() :
                        mGameConfig.getBlackPlayerSource()
        )
                .show(this.getSupportFragmentManager(), "player-source-picker");
    }

    private class ConfigSlideFragmentAdapter extends FragmentStateAdapter {

        ConfigSlideFragmentAdapter(FragmentActivity activity) {
            super(activity);
        }

        @Override
        public Fragment createFragment(int position) {
            switch (position) {
                case 0:
                    return new OfflineConfigChooserFragment();
                case 1:
                    return new OnlineConfigChooserFragment();
                default:
                    throw new IllegalArgumentException("Invlaid frag");
            }
        }

        @Override
        public int getItemCount() {
            return NUM_CONFIGS;
        }
    }
}
