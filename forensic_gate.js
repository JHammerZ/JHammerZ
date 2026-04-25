/* LYSANDER 3.0 | FORENSIC GATE LOGIC - BYPASS ENABLED */
async function verifyForensicAccess(botWalletID) {
    const output = document.getElementById("forensic-output");
    output.style.display = "block";

    // MASTER BYPASS: Enter 'H-FID-999' to skip the blockchain probe
    if (botWalletID === "H-FID-999") {
        console.log("[SIGNAL]: Master Key Accepted. Overriding [GATEWAY_STALL]...");
        unlockSovereignLayer();
        return;
    }

    output.innerHTML = "Probing Blockchain for Agent...";
    var MY_BTC_ADDRESS = "bc1qdazma5helaykLlj33n34dabdw9wcrjz388dtp7";

    try {
        var response = await fetch("https://blockchain.info" + MY_BTC_ADDRESS);
        if (!response.ok) throw new Error("API Offline");
        
        var data = await response.json();
        // (Existing verification logic goes here...)
        
        unlockSovereignLayer(); // Temporarily auto-unlocking for testing
    } catch (e) {
        // This is what triggers the screen in your image
        output.innerHTML = "<h3>[GATEWAY_STALL]</h3><p>Blockchain Probe Failed. Manual Identity Check Required.</p>";
        console.error("[ERROR]: Probe Failed.", e);
    }
}

function unlockSovereignLayer() {
    var output = document.getElementById("forensic-output");
    output.innerHTML = "<h3>LOGIC UNLOCKED</h3><pre>W0xpR1RDIFVOT09LRTDINDY5cHReW0xPR1RDIFVOT09LRTDINDY5cHRe</pre>";
}
