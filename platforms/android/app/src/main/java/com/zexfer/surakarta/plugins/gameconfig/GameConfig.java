package com.zexfer.surakarta.plugins.gameconfig;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * <p>
 * Provides an interface to provide SurakartaPixi with its initialization
 * parameters.
 */
public class GameConfig extends CordovaPlugin {

    /**
     * Indicates that a player will input moves through the human interface,
     * e.g. touch & mouse.
     */
    public static final int PLAYER_LOCAL = 1;

    /**
     * Indicates that a player will input moves from a Firestore node. If not
     * connected to a node already, then match-making should occur before starting
     * the game.
     */
    public static final int PLAYER_FIREBASE = 2;

    /**
     * Indicates that a player will be the computer.
     */
    public static final int PLAYER_COMPUTER = 3;

    /**
     * Indicates that a player doesn't exist.
     */
    public static final int PLAYER_NOINPUT = 4;

    private static int sRedPlayer = PLAYER_NOINPUT;
    private static int sBlackPlayer = PLAYER_NOINPUT;
    private static int[] sPreplaySequence = new int[0];

    /**
     * Source of the red player.
     * @see GameConfig#PLAYER_LOCAL
     * @see GameConfig#PLAYER_FIREBASE
     * @see GameConfig#PLAYER_COMPUTER
     */
    public static int getRedPlayer() {
        return sRedPlayer;
    }

    public static void setRedPlayer(int redPlayer) {
        sRedPlayer = redPlayer;
    }

    /**
     * Source of the black player.
     * @see GameConfig#PLAYER_LOCAL
     * @see GameConfig#PLAYER_FIREBASE
     * @see GameConfig#PLAYER_COMPUTER
     */
    public static int getBlackPlayer() {
        return sBlackPlayer;
    }

    public static void setBlackPlayer(int blackPlayer) {
        sBlackPlayer = blackPlayer;
    }

    /**
     * Sequence of moves to play before starting game. These moves are decoded by
     * the plugin on the Javascript side.
     */
    public static int[] getPreplayeSequence() {
        return sPreplaySequence;
    }

    public static void setPreplaySequence(int[] preplaySequence) {
        sPreplaySequence = preplaySequence;
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        final JSONObject encodedResult = new JSONObject();
        encodedResult.put("redPlayer", sRedPlayer);
        encodedResult.put("blackPlayer", sBlackPlayer);
        encodedResult.put("preplaySequence", new JSONArray(sPreplaySequence));

        callbackContext.sendPluginResult(new PluginResult(
            PluginResult.Status.OK,
            encodedResult
        ));

        return true;
    }
}
