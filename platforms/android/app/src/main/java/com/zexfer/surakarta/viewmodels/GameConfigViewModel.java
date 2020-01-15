package com.zexfer.surakarta.viewmodels;

import android.content.Context;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.zexfer.surakarta.PlayerSource;
import com.zexfer.surakarta.database.SurakartaDatabase;
import com.zexfer.surakarta.database.entities.SurakartaTrack;
import com.zexfer.surakarta.plugins.gameconfig.GameConfig;

import java.util.List;

public class GameConfigViewModel extends ViewModel {

    private int mTargetPlayerSource = PlayerSource.LOCAL;

    private int mRedPlayerSource = PlayerSource.LOCAL;
    private int mBlackPlayerSource = PlayerSource.LOCAL;
    private int mMode = GameConfig.MODE_OFFLINE;

    private LiveData<List<SurakartaTrack>> mHistory;

    public int getRedPlayerSource() {
        return mRedPlayerSource;
    }

    public void setRedPlayerSource(int redPlayerSource) {
        mRedPlayerSource = redPlayerSource;
    }

    public int getBlackPlayerSource() {
        return mBlackPlayerSource;
    }

    public void setBlackPlayerSource(int blackPlayerSource) {
        mBlackPlayerSource = blackPlayerSource;
    }

    public int getMode() {
        return mMode;
    }

    public void setMode(int mode) {
        mMode = mode;
    }

    public int getTargetPlayerSource() {
        return mTargetPlayerSource;
    }

    public void setTargetPlayerSource(int source) {
        mTargetPlayerSource = source;
    }

    public LiveData<List<SurakartaTrack>> getHistory(Context appContext) {
        if (mHistory == null) {
            mHistory = SurakartaDatabase.getInstance(appContext)
                    .tracksDao()
                    .getFullHistory();
        }

        return mHistory;
    }

    public void commitConfig() {
        GameConfig.setRedPlayer(mTargetPlayerSource);
        GameConfig.setBlackPlayer(PlayerSource.LOCAL);
        GameConfig.setMode(mMode);
    }
}
