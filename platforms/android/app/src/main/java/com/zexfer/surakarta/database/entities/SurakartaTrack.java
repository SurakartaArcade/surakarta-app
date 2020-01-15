package com.zexfer.surakarta.database.entities;

import androidx.annotation.Nullable;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;
import androidx.room.TypeConverters;

import java.sql.Date;
import java.util.Calendar;
import java.util.Objects;

/**
 * Record a completed surakarta game that can be reviewed by the user.
 */
@Entity
@TypeConverters(value = DateConverter.class)
public class SurakartaTrack {
    @PrimaryKey(autoGenerate = true)
    public int rowId;

    /**
     * Player source for the red player
     *
     * @see com.zexfer.surakarta.plugins.gameconfig.GameConfig
     */
    @ColumnInfo(name = "red_player", index = true)
    public int redPlayer;

    /**
     * Player source for the black player
     *
     * @see com.zexfer.surakarta.plugins.gameconfig.GameConfig
     */
    @ColumnInfo(name = "black_player", index = true)
    public int blackPlayer;

    /**
     * Date this game was saved.
     */
    @ColumnInfo(index = true)
    public Date date;

    /**
     * Encoded string that contains all the "moves" played in this
     * game. It is decompressed & decoded by surakarta-store.
     */
    @ColumnInfo(name = "encoded_bundle")
    public String encodedBundle;

    public SurakartaTrack() {

    }

    public SurakartaTrack(int redPlayer, int blackPlayer, String encodedBundle) {
        this.redPlayer = redPlayer;
        this.blackPlayer = blackPlayer;
        this.date = new Date(Calendar.getInstance().getTime().getTime());
        this.encodedBundle = encodedBundle;
    }

    @Override
    public boolean equals(@Nullable Object obj) {
        if (!(obj instanceof SurakartaTrack)) {
            return false;
        }

        final SurakartaTrack track = (SurakartaTrack) obj;

        return this.rowId == track.rowId &&
                this.redPlayer == track.redPlayer &&
                this.blackPlayer == track.blackPlayer &&
                Objects.equals(date, track.date) &&
                Objects.equals(encodedBundle, track.encodedBundle);
    }
}
