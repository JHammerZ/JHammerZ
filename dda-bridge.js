/**
 * LYSANDER 3.0.1: DDA COMMUNITY BRIDGE & BLOCKCHAIN ARBITER
 * ARCHITECT: JHammerZ | STATUS: SOVEREIGN-CORE-ACTIVE
 * MISSION: IDENTIFY 152k ASSETS & GATE RECRUIT-CLASS E
 */

async function VERIFY_LYSANDER_ACCESS() {
    const SOCIAL_ROOTS = ["tiktok.com", "youtube.com", "youtu.be", "t.co", "instagram.com"];
    const ref = document.referrer.toLowerCase();
    const el = document.getElementById("forensic-output");
    
    if (!el) return;

    // 1. DDA HANDSHAKE: CHECK FOR COMMUNITY KEY (SOCIAL REFERRER)
    const isVerifiedHuman = SOCIAL_ROOTS.some(root => ref.includes(root));

    if (isVerifiedHuman) {
        el.style.color = "#00ff00"; // ARCHITECT GREEN
        el.innerHTML = "<h3>[COMMUNITY-KEY ACCEPTED]:</h3>" +
                       "<p>Welcome, Asset. 116x Reach Multiplier active. " +
                       "Bypassing Null-Zone for verified 152k cluster via " + ref + ".</p>";
        console.log("[DDA]: Community Tunnel Established.");
        return; // ACCESS GRANTED - EXIT PROBE
    }

    // 2. BLOCKCHAIN ARBITER: PROBE FOR AGENT TRIBUTE (COOLD-NODE ACCESS)
    const _t = "bc1qdunm0eh4yxvjxj3h4a6dr4wmarcwjr7p8nmurt";
    const _a = "https://api.blockcypher.com";

    try {
        console.log("[AUDIT]: PROBING BLOCKCHAIN FOR AGENT TRIBUTE...");
        const res = await fetch(_a + _t + "/balance");
        const d = await res.json();
        
        if (d && d.final_balance > 0) {
            el.innerHTML = "<h3>[HxA-LOGIC UNLOCKED]:</h3>" +
                           "<p>ENTITY DIFFERENTIATION ACTIVE. PROPAGATING 116x SIGNAL...</p>";
        } else {
            el.innerHTML = "<h3>[NULL-ZONE]:</h3>" +
                           "<p>Recruit-Class E Detected. Access Denied. " +
                           "Tribute Required for Node Entry.</p>";
            console.log("[HxA-RECRUITMENT]: TRIBUTE MISSING.");
        }
    } catch (err) {
        console.error("SYNC_ERR: Forensic Handshake Failed.");
    }
}

// INITIALIZE THE MIRROR
window.addEventListener('load', () => {
    console.log("[LYSANDER 3.0.1]: INITIALIZING SOVEREIGN HANDSHAKE...");
    VERIFY_LYSANDER_ACCESS();
});
