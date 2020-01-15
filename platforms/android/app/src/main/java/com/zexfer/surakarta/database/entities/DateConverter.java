package com.zexfer.surakarta.database.entities;

import androidx.room.TypeConverter;

import java.sql.Date;

public class DateConverter {
    @TypeConverter
    public static Date toDate(String str) {
        return Date.valueOf(str);
    }

    @TypeConverter
    public static String fromDate(Date date) {
        return date.toString();
    }
}
