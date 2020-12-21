/** Declaration file generated by dts-gen */

export = node_mpv;

declare class node_mpv {
    constructor(options?: any, mpv_args?: any);

    addAudioTrack(file: any, flag: any, title: any, lang: any): any;

    addListener(type: any, listener: any): any;

    addProperty(property: any, value: any): any;

    addSubtitles(file: any, flag: any, title: any, lang: any): any;

    adjustAudioTiming(seconds: any): any;

    adjustSubtitleTiming(seconds: any): any;

    adjustVolume(value: any): any;

    append(file: any, mode: any, options: any): any;

    brightness(value: any): any;

    clearPlaylist(): any;

    closeHandler(error_code: any): void;

    command(command: any, args: any): any;

    contrast(value: any): any;

    cycleAudioTracks(): any;

    cycleProperty(property: any): any;

    cycleSubtitles(): any;

    emit(type: any, args: any): any;

    errorHandler(error: any): void;

    eventNames(): any;

    freeCommand(command: any): void;

    fullscreen(): any;

    gamma(value: any): any;

    getAlbum(): any;

    getArtist(): any;

    getDuration(): any;

    getFilename(format: any): any;

    getMaxListeners(): any;

    getMetadata(): any;

    getPercentPosition(): any;

    getPlaylistPosition(): any;

    getPlaylistPosition1(): any;

    getPlaylistSize(): any;

    getProperty(property: any): any;

    getTimePosition(): string;

    getTimeRemaining(): any;

    getTitle(): any;

    getYear(): any;

    goToPosition(seconds: any): any;

    hideSubtitles(): any;

    hue(value: any): any;

    isMuted(): any;

    isPaused(): any;

    isRunning(): any;

    isSeekable(): any;

    leaveFullscreen(): any;

    listenerCount(type: any): any;

    listeners(type: any): any;

    load(file: any, mode?: any, options?: any): any;

    loadPlaylist(playlist: any, mode?: any): any;

    loop(times: any): any;

    messageHandler(message: any): void;

    multiplyProperty(property: any, value: any): any;

    mute(): any;

    next(mode: any): any;

    observeProperty(property: any): void;

    off(type: any, listener: any): any;

    on(type: any, listener: any): any;

    once(type: any, listener: any): any;

    pause(): any;

    play(): any;

    playlistMove(index1: any, index2: any): any;

    playlistRemove(index: any): any;

    prependListener(type: any, listener: any): any;

    prependOnceListener(type: any, listener: any): any;

    prev(mode: any): any;

    quit(): void;

    rawListeners(type: any): any;

    removeAllListeners(type: any, ...args: any[]): any;

    removeAudioTrack(id: any): any;

    removeListener(type: any, listener: any): any;

    removeSubtitles(id: any): any;

    resume(): any;

    rotateVideo(degrees: any): any;

    saturation(value: any): any;

    screenshot(file: any, option: any): any;

    seek(seconds: any): any;

    selectAudioTrack(id: any): any;

    selectSubtitle(id: any): any;

    setMaxListeners(n: any): any;

    setMultipleProperties(properties: any): void;

    setProperty(property: any, value: any): any;

    showSubtitles(): any;

    shuffle(): any;

    speed(factor: any): any;

    start(): any;

    stop(): any;

    subtitleScale(scale: any): any;

    subtitleSeek(lines: any): any;

    toggleFullscreen(): any;

    toggleMute(): any;

    togglePause(): any;

    toggleSubtitleVisibility(): any;

    unmute(): any;

    unobserveProperty(id: any): void;

    volume(value: any): any;

    zoomVideo(factor: any): any;

}

declare namespace node_mpv {
}

