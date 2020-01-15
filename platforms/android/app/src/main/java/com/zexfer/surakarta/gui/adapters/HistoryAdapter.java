package com.zexfer.surakarta.gui.adapters;

import android.view.LayoutInflater;
import android.view.ViewGroup;

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

    public HistoryAdapter(LayoutInflater layoutInflater) {
        super(DIFF_CALLBACK);
        mLayoutInflater = layoutInflater;
    }

    @NonNull
    @Override
    public HistoryViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new HistoryViewHolder(
                DataBindingUtil.inflate(mLayoutInflater,
                        R.layout.entry_track,
                        parent,
                        false));
    }

    @Override
    public void onBindViewHolder(@NonNull HistoryViewHolder holder, int position) {
        holder.bind(getItem(position));
    }

    public static class HistoryViewHolder extends RecyclerView.ViewHolder {

        private EntryTrackBinding mViewBinding;

        public HistoryViewHolder(@NonNull EntryTrackBinding viewBinding) {
            super(viewBinding.getRoot());
            mViewBinding = viewBinding;
        }

        protected void bind(SurakartaTrack track) {
            if (track.redPlayer == GameConfig.PLAYER_LOCAL &&
                    track.blackPlayer == GameConfig.PLAYER_LOCAL) {
                mViewBinding.gameTitle.setText(R.string.game_local);
                mViewBinding.gameDate.setText(track.date.toString());
            } else {
                mViewBinding.gameTitle.setText(R.string.game_online);
            }
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
