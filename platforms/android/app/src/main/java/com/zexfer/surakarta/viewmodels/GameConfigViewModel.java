package com.zexfer.surakarta.viewmodels;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.zexfer.surakarta.PlayerSource;
import com.zexfer.surakarta.plugins.gameconfig.GameConfig;

public class GameConfigViewModel extends ViewModel {

    private int mTargetPlayerSource = PlayerSource.LOCAL;

    private int mRedPlayerSource = PlayerSource.LOCAL;
    private int mBlackPlayerSource = PlayerSource.LOCAL;
    private int mMode = GameConfig.MODE_OFFLINE;

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

    public void commitConfig() {
        GameConfig.setRedPlayer(mTargetPlayerSource);
        GameConfig.setBlackPlayer(PlayerSource.LOCAL);
    }
}
