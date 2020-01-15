package com.zexfer.surakarta.gui.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.ViewGroup;
import android.widget.PopupMenu;

import androidx.annotation.NonNull;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.DiffUtil;
import androidx.recyclerview.widget.ListAdapter;
import androidx.recyclerview.widget.RecyclerView;

import com.zexfer.surakarta.R;
import com.zexfer.surakarta.database.entities.SurakartaTrack;
import com.zexfer.surakarta.databinding.EntryTrackBinding;
import com.zexfer.surakarta.plugins.gameconfig.GameConfig;

public class HistoryAdapter extends ListAdapter<SurakartaTrack, HistoryAdapter.HistoryViewHolder> {

    private LayoutInflater mLayoutInflater;
    private Context mContext;

    public HistoryAdapter(LayoutInflater layoutInflater) {
        super(DIFF_CALLBACK);
        mLayoutInflater = layoutInflater;
        mContext = layoutInflater.getContext();
    }

    @NonNull
    @Override
    public HistoryViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new HistoryViewHolder(
                mContext,
                DataBindingUtil.inflate(mLayoutInflater,
                        R.layout.entry_track,
                        parent,
                        false));
    }

    @Override
    public void onBindViewHolder(@NonNull HistoryViewHolder holder, int position) {
        holder.bind(getItem(position));
    }

    /**
     * Implement this to listen to actions selected by the user on a specific
     * game.
     */
    public interface HistoryTrackActionListener {
        /**
         * @param actionStringRes - can be R.string.action_analyze,
         *                        R.string.action_review
         */
        void onTrackActionSelected(SurakartaTrack track, int actionStringRes);
    }

    public static class HistoryViewHolder extends RecyclerView.ViewHolder
            implements PopupMenu.OnMenuItemClickListener {

        private EntryTrackBinding mViewBinding;

        private PopupMenu mPopupMenu;

        private HistoryTrackActionListener mListener;

        private SurakartaTrack mTrack;

        public HistoryViewHolder(@NonNull Context context, @NonNull EntryTrackBinding viewBinding) {
            super(viewBinding.getRoot());

            if (context instanceof HistoryTrackActionListener) {
                mListener = (HistoryTrackActionListener) context;
            } else {
                throw new IllegalArgumentException(
                        "Context must implement HistoryTrackActionListener");
            }

            mViewBinding = viewBinding;

            mPopupMenu = new PopupMenu(context, mViewBinding.moreOptionsButton);
            mPopupMenu.getMenuInflater()
                    .inflate(
                            R.menu.entry_track,
                            mPopupMenu.getMenu());
            mPopupMenu.setOnMenuItemClickListener(this);

            mViewBinding.moreOptionsButton.setOnClickListener(view -> {
                mPopupMenu.show();
            });

            mViewBinding.getRoot().setOnClickListener(
                    view -> {
                        mListener.onTrackActionSelected(mTrack, R.string.action_review);
                    });
        }

        protected void bind(SurakartaTrack track) {
            mTrack = track;

            if (track.redPlayer == GameConfig.PLAYER_LOCAL &&
                    track.blackPlayer == GameConfig.PLAYER_LOCAL) {
                mViewBinding.gameTitle.setText(R.string.game_local);
                mViewBinding.gameDate.setText(track.date.toString());
            } else {
                mViewBinding.gameTitle.setText(R.string.game_online);
            }
        }

        @Override
        public boolean onMenuItemClick(MenuItem item) {
            switch (item.getItemId()) {
                case R.id.action_analyze:
                    mListener.onTrackActionSelected(mTrack, R.string.action_analyze);
                    break;
                case R.id.action_review:
                    mListener.onTrackActionSelected(mTrack, R.string.action_review);
                    break;
            }
            return false;
        }
    }

    private static final DiffUtil.ItemCallback<SurakartaTrack> DIFF_CALLBACK =
            new DiffUtil.ItemCallback<SurakartaTrack>() {
                @Override
                public boolean areItemsTheSame(
                        @NonNull SurakartaTrack oldTrack, @NonNull SurakartaTrack newTrack) {
                    return oldTrack.rowId == newTrack.rowId;
                }

                @Override
                public boolean areContentsTheSame(
                        @NonNull SurakartaTrack oldTrack, @NonNull SurakartaTrack newTrack) {
                    return oldTrack.equals(newTrack);
                }
            };
}
