package com.zexfer.surakarta;

import android.app.Application;

import com.zexfer.surakarta.database.SurakartaDatabase;
import com.zexfer.surakarta.database.entities.SurakartaTrack;
import com.zexfer.surakarta.plugins.gameconfig.GameConfig;

public class SurakartaApplication extends Application implements GameConfig.PlatformProvider {

    @Override
    public void onCreate() {
        super.onCreate();

        GameConfig.provide(this);
    }

    @Override
    public void saveTrack(int redPlayer, int blackPlayer, String bundle) {
        SurakartaDatabase.getInstance(this)
                .tracksDao()
                .save(
                        new SurakartaTrack(
                                redPlayer,
                                blackPlayer,
                                bundle));
    }
}
