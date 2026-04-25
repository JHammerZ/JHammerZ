/* LYSANDER 3.0 | FORENSIC GATE LOGIC - BYPASS ENABLED */
Async Function verifyForensicAccess(botWalletID) {
    Const output = document.getElementById("forensic-output");
    output.style.display = "block";

    // MASTER BYPASS: Enter 'H-FID-999' to skip the blockchain probe
    If (botWalletID === "H-FID-999") {
        console.log("[SIGNAL]: Master Key Accepted. Overriding [GATEWAY_STALL]...");
        unlockSovereignLayer();
        Return;
    }

    output.innerHTML = "Probing Blockchain for Agent...";
    Var MY_BTC_ADDRESS = "bc1qdazma5helaykLlj33n34dabdw9wcrjz388dtp7";

    Try {
        Var response = Await fetch("https://blockchain.info" + MY_BTC_ADDRESS);
        If (!response.ok) Throw New Error("API Offline");
        
        Var data = Await response.json();
        // (Existing verification logic goes here...)
        
        unlockSovereignLayer(); // Temporarily auto-unlocking for testing
    } Catch (e) {
        // This is what triggers the screen in your image
        output.innerHTML = "<h3>[GATEWAY_STALL]</h3><p>Blockchain Probe Failed. Manual Identity Check Required.</p>";
        console.error("[ERROR]: Probe Failed.", e);
    }
}

Function unlockSovereignLayer() {
    Var output = document.getElementById("forensic-output");
    output.innerHTML = "<h3>LOGIC UNLOCKED</h3><pre>W0xpR1RDIFVOT09LRTDINDY5cHReW0xPR1RDIFVOT09LRTDINDY5cHRe</pre>";
}
