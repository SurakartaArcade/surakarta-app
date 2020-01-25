package com.zexfer.surakarta.database;

import android.content.Context;

import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;
import androidx.room.TypeConverters;

import com.zexfer.surakarta.database.entities.DateConverter;
import com.zexfer.surakarta.database.entities.SurakartaTrack;

@Database(entities = {SurakartaTrack.class}, version = 1, exportSchema = false)
public abstract class SurakartaDatabase extends RoomDatabase {

    public abstract TracksDao tracksDao();

    private static volatile SurakartaDatabase sInstance;

    public static SurakartaDatabase getInstance(Context appContext) {
        if (sInstance != null) {
            return sInstance;
        }

        synchronized (SurakartaDatabase.class) {
            if (sInstance == null) {
                sInstance = Room.databaseBuilder(
                        appContext,
                        SurakartaDatabase.class,
                        "SurakartaDB"
                ).build();
            }
        }

        return sInstance;
    }
}
