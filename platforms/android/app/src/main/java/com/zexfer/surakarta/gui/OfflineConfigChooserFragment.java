package com.zexfer.surakarta.gui;

import android.content.Context;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.zexfer.surakarta.R;

/**
 * Fragment for configuring local/computer-based Surakarta games. This is
 * used in a {@code ViewPager} and expects the context to handle click
 * events (by implementing {@code View.OnClickListener}.
 */
public class OfflineConfigChooserFragment extends Fragment
        implements View.OnClickListener {

    private View.OnClickListener mListener;

    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);

        if (context instanceof View.OnClickListener) {
            mListener = (View.OnClickListener) context;
        } else {
            throw new IllegalStateException("Activity must implement View.OnClickListener");
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View rootLayout = inflater.inflate(R.layout.fragment_offline_config_chooser,
                container,
                false);

        rootLayout.findViewById(R.id.red_player_toggle_button)
                .setOnClickListener(this);
        rootLayout.findViewById(R.id.black_player_toggle_button)
                .setOnClickListener(this);

        return rootLayout;
    }

    @Override
    public void onClick(View v) {
        mListener.onClick(v);// delegate to activity
    }

    @Override
    public void onDetach() {
        super.onDetach();
        this.mListener = null;
    }
}
