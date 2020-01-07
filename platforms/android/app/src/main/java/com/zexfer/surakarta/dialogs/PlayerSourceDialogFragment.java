package com.zexfer.surakarta.dialogs;

import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.view.ContextThemeWrapper;
import androidx.fragment.app.DialogFragment;

import com.zexfer.surakarta.PlayerSource;
import com.zexfer.surakarta.R;

/**
 * Fragment that is used to pick the player source before starting
 * a Surakarta game.
 */
public class PlayerSourceDialogFragment extends DialogFragment {

    public static final String ARG_PLAYER_ID = "player_id";
    public static final String ARG_PLAYER_DEFAULT = "player-default";

    private View mRootLayout;
    private PlayerSourceListener mListener;
    private int mPlayerId;
    private int mChosenSource = -1;
    private int mChosenSourceViewId = -1;

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (this.getArguments() != null) {
            mPlayerId = this.getArguments().getInt(ARG_PLAYER_ID, 0);
            mChosenSource = this.getArguments().getInt(ARG_PLAYER_DEFAULT, PlayerSource.LOCAL);

            switch (mChosenSource) {
                case PlayerSource.LOCAL:
                    mChosenSourceViewId = R.id.entry_local;
                    break;
                case PlayerSource.COMPUTER:
                    mChosenSourceViewId = R.id.entry_computer;
                    break;
            }
        }
    }

    @NonNull
    @Override
    public Dialog onCreateDialog(@NonNull Bundle savedInstanceState) {
        View rootLayout = getActivity().getLayoutInflater().inflate(
                R.layout.fragment_player_source_dialog, null);

        View.OnClickListener onEntryClicked = v -> {
            if (mChosenSourceViewId != -1) {
                putDefaultBackground(mChosenSourceViewId);
            }

            switch (v.getId()) {
                case R.id.entry_local:
                    mChosenSource = PlayerSource.LOCAL;
                    break;
                case R.id.entry_computer:
                    mChosenSource = PlayerSource.COMPUTER;
                    break;
            }

            mChosenSourceViewId = v.getId();
            putSelectedBackground(mChosenSourceViewId);
        };

        rootLayout.findViewById(R.id.entry_local).setOnClickListener(onEntryClicked);
        rootLayout.findViewById(R.id.entry_computer).setOnClickListener(onEntryClicked);

        AlertDialog.Builder builder = new AlertDialog.Builder(
                new ContextThemeWrapper(getContext(), R.style.AppTheme_TextCorrector));

        builder.setTitle(R.string.title_pick)
                .setView(rootLayout)
                .setPositiveButton(R.string.action_pick, (dialog, which) ->
                        mListener.onPlayerSourceChosen(mChosenSource, mPlayerId)
                )
                .setNegativeButton(R.string.action_cancel, null);

        mRootLayout = rootLayout;

        if (mChosenSourceViewId != -1) {
            putSelectedBackground(mChosenSourceViewId);
        }

        return builder.create();
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof PlayerSourceListener) {
            mListener = (PlayerSourceListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement PlayerSourceListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    private void putDefaultBackground(int id) {
        mRootLayout.findViewById(id)
                .setBackground(null);
    }

    private void putSelectedBackground(int id) {
        mRootLayout.findViewById(id)
                .setBackgroundResource(R.drawable.round_rectangle_gray);
    }

    public static PlayerSourceDialogFragment newInstance(int playerId, int defaultSource) {
        PlayerSourceDialogFragment fragment = new PlayerSourceDialogFragment();
        Bundle args = new Bundle();

        args.putInt(ARG_PLAYER_ID, playerId);
        args.putInt(ARG_PLAYER_DEFAULT, defaultSource);
        fragment.setArguments(args);

        return fragment;
    }

    /**
     * Implement this interface to retrieve the chosen player source
     * on this dialog is closed.
     */
    public interface PlayerSourceListener {
        void onPlayerSourceChosen(int source, int targetRequestCode);
    }
}
