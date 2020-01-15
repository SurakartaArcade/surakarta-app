package com.zexfer.surakarta.database;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.Query;

import com.zexfer.surakarta.database.entities.SurakartaTrack;

import java.util.List;

@Dao
public interface TracksDao {
    @Query("SELECT * FROM surakartatrack")
    LiveData<List<SurakartaTrack>> getFullHistory();

    @Insert
    void save(SurakartaTrack track);
}
