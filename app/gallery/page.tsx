"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Play, Pause, Volume2, VolumeX, RefreshCw, Eye, Sparkles, 
  Film, ShieldCheck, CheckCircle2, ChevronRight, ArrowLeft,
  Tv, MonitorPlay, HelpCircle, Flame, ExternalLink
} from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  src: string;
  category: string;
  badge?: string;
  tags: string[];
  poster: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: "vid1",
    title: "Polymer Texture & High-Fidelity Flex Demonstration",
    description: "Watch a high-definition demonstration of our polymer banknotes' physical characteristics. This preview showcases the authentic feel, surface texture, elasticity, and immediate snap-back memory of our custom polymer film substrate under active handling.",
    src: "/vid1.mp4",
    category: "Physical Texture & Flex Test",
    badge: "Highly Demanded",
    tags: ["Polymer Base", "Snap-Back Memory", "Tactile Coating", "Waterproof"],
    poster: "/australian_polymer_note.jpg"
  },
  {
    id: "vid2",
    title: "8K Cinematic Studio Camera & Color Profile Capture",
    description: "Examine how our prop banknotes behave under professional 8K cinematic lenses and high-frequency studio lights. This close-up review captures accurate color calibration and layout sharpness under extreme zoom angles, perfect for camera directors and lighting masters.",
    src: "/vid2.mp4",
    category: "On-Set Camera Performance",
    badge: "Director's Pick",
    tags: ["8K Studio Test", "Camera Ready", "Color Calibration", "Anti-Glare Coating"],
    poster: "/bank_counting_machine.jpg"
  },
  {
    id: "vid3",
    title: "Holographic Foil & Clear Window Optical Run",
    description: "A detailed visual inspection focusing on our holographic foil elements and full-length clear window transparency. Watch the light pass perfectly through the holographic bird design and embossed figures, showcasing a top-tier visual finish on film.",
    src: "/vid3.mp4",
    category: "Optical Foil & Window Clarity",
    badge: "Precision Detail",
    tags: ["Clear Window", "Holographic Birds", "Embossed Foils", "Double-Sided Alignment"],
    poster: "/security_feature_check.jpg"
  }
];

export default function VideoGalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerSectionRef = useRef<HTMLDivElement>(null);

  // Sync state when selected video changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
      setCurrentTime(0);
      
      // Auto-play on select if they previously clicked play
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, [selectedVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const selectAndScroll = (video: VideoItem) => {
    setSelectedVideo(video);
    if (playerSectionRef.current) {
      playerSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-24" id="video-gallery-app">
      {/* Top Header Section */}
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800 py-16 px-6 md:px-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-widest mb-6 group"
            id="back-home-link"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Store Home</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-black uppercase px-2.5 py-1 rounded tracking-widest">
                  Studio Screening Room
                </span>
                <span className="text-slate-600 font-bold">•</span>
                <span className="text-slate-400 font-mono text-xs flex items-center gap-1">
                  <Film className="w-3.5 h-3.5 text-emerald-500" />
                  Ultra HD Preview
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tight text-white leading-none">
                On-Camera Client Video Gallery
              </h1>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
                See our professional-grade Australian play money perform on camera. Inspect their texture, flexibility, realistic shine, and camera-ready alignment to make your next production flawless.
              </p>
            </div>
            
            <div className="shrink-0 bg-slate-800/50 border border-slate-700/80 p-5 rounded-xl max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="font-bold text-xs uppercase tracking-wide text-white">Production Safety</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                All videos show genuine, unmodified physical items built entirely compliant with Reserve Bank of Australia and AFP play currency standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Theater Mode Section */}
      <section ref={playerSectionRef} className="max-w-6xl mx-auto px-6 md:px-10 mt-12 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Large Theater Player */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-[16/9] w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group" id="theater-player">
              <video
                ref={videoRef}
                src={selectedVideo.src}
                className="w-full h-full object-contain"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
                muted={isMuted}
                loop
                playsInline
                poster={selectedVideo.poster}
              />

              {/* Central Floating Play Overlay when paused */}
              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-all hover:bg-black/50"
                >
                  <button className="w-20 h-20 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-115">
                    <Play className="w-10 h-10 fill-white translate-x-0.5" />
                  </button>
                </div>
              )}

              {/* Bottom Custom Playbar Overlay on hover */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 flex flex-col gap-3 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Progress bar slider */}
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.05"
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full accent-emerald-500 bg-slate-700 h-1 rounded-lg appearance-none cursor-pointer hover:h-1.5 transition-all"
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={togglePlay}
                      className="text-white hover:text-emerald-400 transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                    </button>

                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                      <span>{formatTime(currentTime)}</span>
                      <span>/</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button 
                      onClick={toggleMute}
                      className="text-white hover:text-emerald-400 transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-emerald-400" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Audio warning badge */}
              {isMuted && isPlaying && (
                <div 
                  onClick={toggleMute}
                  className="absolute top-4 right-4 bg-slate-900/90 border border-slate-700 hover:border-emerald-500 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer backdrop-blur select-none transition-all"
                >
                  <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                  <span>VIDEO MUTED (TAP TO UNMUTE)</span>
                </div>
              )}
            </div>

            {/* Video Meta Info */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase px-3 py-1 rounded">
                  {selectedVideo.category}
                </span>
                {selectedVideo.badge && (
                  <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase px-3 py-1 rounded flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" />
                    {selectedVideo.badge}
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white uppercase italic tracking-tight">
                {selectedVideo.title}
              </h2>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {selectedVideo.description}
              </p>

              <div className="border-t border-slate-800 pt-4">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">Technical Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedVideo.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-slate-800 text-slate-300 font-mono px-2 py-1 rounded border border-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Playlist selection */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Tv className="w-4 h-4 text-emerald-500" />
              Available Showcases ({VIDEOS.length})
            </h3>

            <div className="space-y-3.5" id="video-playlist">
              {VIDEOS.map((video) => {
                const isActive = selectedVideo.id === video.id;
                return (
                  <div
                    key={video.id}
                    onClick={() => selectAndScroll(video)}
                    className={`group cursor-pointer p-4 rounded-xl border transition-all text-left flex flex-col justify-between h-40 relative overflow-hidden ${
                      isActive 
                        ? "bg-slate-900 border-emerald-500/70 shadow-[0_0_15px_rgba(16,185,129,0.15)]" 
                        : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    {/* Background poster watermarked slightly */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity pointer-events-none">
                      <img 
                        src={video.poster} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="relative z-10 flex justify-between items-start">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        {video.category}
                      </span>
                      {isActive && (
                        <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-black px-2 py-0.5 rounded border border-emerald-500/30 uppercase tracking-widest">
                          Currently Loaded
                        </span>
                      )}
                    </div>

                    <div className="relative z-10 mt-4">
                      <h4 className="font-extrabold text-sm text-white uppercase italic tracking-tight leading-tight line-clamp-2">
                        {video.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1 font-mono">
                        <MonitorPlay className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Watch Demo</span>
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* On-Set Camera & Lighting Guide */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5" id="camera-lighting-tips-box">
              <span className="text-[9px] font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 uppercase inline-block mb-3 font-mono">
                Production Tip
              </span>
              <h4 className="font-extrabold text-sm text-white uppercase tracking-tight mb-2">
                On-Set Lighting & Focus Tips
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                To capture the ultimate realism on camera with our polymer banknotes:
              </p>
              <ul className="text-[10px] text-slate-400 space-y-2.5 list-none pl-0">
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">&bull;</span>
                  <span><strong>Defuse Hot Spotlights:</strong> Standard high-key backlights look excellent, but try defusing intense overhead panels to reduce any micro-shine on clear plastic windows.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">&bull;</span>
                  <span><strong>Shallow Depth of Field:</strong> Shooting at f/1.8 to f/2.8 isolates the notes perfectly in close-ups while letting backgrounds melt away for a high-budget aesthetic.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">&bull;</span>
                  <span><strong>Tactile Crinkling:</strong> Gently crunching a few notes before tossing them adds authentic shadows and micro-creases that highlight their premium elasticity.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Trust Grid: Why Buy from Aus Prop Money */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 mt-20">
        <div className="border-t border-slate-900 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight text-white">
              Studio Grade Standards & Quality Controls
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Our prop banknotes are designed by professional film production crews to eliminate editing delays and visual flaws on active sets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-left space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm uppercase text-white tracking-wide">Anti-Reflection Matte Film</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Treated with specialized matte chemical compounds to prevent light reflection or glare from hot studio camera rigs, ensuring clean capture in every frame.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-left space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm uppercase text-white tracking-wide">100% Legal & Compliant</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Contains highly clear "SPECIMEN" identifiers, modified proportions, and minor imagery differences required under federal laws, ensuring zero administrative holds.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-left space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm uppercase text-white tracking-wide">True-to-Life Weight</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered with physical dimensions and density balances that react exactly like genuine tender when falling, scattered, or counted on active camera layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big Action Call To Action */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block">
              Premium Cinema Bundles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight text-white leading-tight">
              Ready to Upgrade Your Production Quality?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Order our film-approved Australian Dollar banknotes directly. Our packages are used daily across top Netflix series, commercial advertisements, and safety academy exercises.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Link 
                href="/#shop" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-widest uppercase py-3.5 px-8 rounded-lg transition-colors border border-emerald-700 shadow-md text-center"
                id="cta-shop-button"
              >
                Shop Banknote Packs
              </Link>
              <Link 
                href="/contact" 
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-widest uppercase py-3.5 px-8 rounded-lg transition-colors border border-slate-800 text-center"
                id="cta-contact-button"
              >
                Contact Support Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
