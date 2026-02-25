"use client";

import { useState } from "react";

export default function JarvisAI() {

    const [open, setOpen] = useState(false);

    return (
        <>
            {/* 👑 CALL JARVIS BUTTON */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    style={{
                        position: "fixed",
                        bottom: "35px",
                        right: "35px",
                        zIndex: 9999,
                        background: "rgba(0,0,0,0.9)",
                        color: "#D4AF37",
                        border: "1px solid rgba(212,175,55,.6)",
                        padding: "12px 20px",
                        borderRadius: "12px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        boxShadow: "0 0 25px rgba(212,175,55,.5)",
                        transition: "all .3s ease"
                    }}
                >
                    👑 Call Jarvis
                </button>
            )}

            {/* 🧠 JARVIS POPUP */}
            {open && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "35px",
                        right: "35px",
                        width: "420px",
                        height: "600px",
                        zIndex: 9999,
                        borderRadius: "18px",
                        overflow: "hidden",
                        background: "rgba(0,0,0,.92)",
                        backdropFilter: "blur(14px)",
                        border: "1px solid rgba(212,175,55,.4)",
                        boxShadow: "0 0 35px rgba(212,175,55,.4)",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={() => setOpen(false)}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "12px",
                            zIndex: 10000,
                            background: "rgba(0,0,0,.6)",
                            color: "#D4AF37",
                            border: "1px solid rgba(212,175,55,.5)",
                            borderRadius: "50%",
                            width: "32px",
                            height: "32px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backdropFilter: "blur(6px)"
                        }}
                    >
                        ✕
                    </button>

                    {/* IFRAME */}
                    <iframe
                        src="https://classy-profiterole-99c8a8.netlify.app"
                        allow="microphone"
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                            flex: 1
                        }}
                    />
                </div>
            )}
        </>
    );
}