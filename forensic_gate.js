/*
  LYSANDER 3.0 | FORENSIC GATE LOGIC 
  FIX: Bypassing [GATEWAY_STALL] via API Redundancy
*/

async function verifyForensicAccess(botWalletID) {
    var MY_BTC_ADDRESS = "bc1qdazma5helaykLlj33n34dabdw9wcrjz388dtp7";
    var TIER_2_PRICE = 0.005;
    const output = document.getElementById("forensic-output");

    console.log("[SYSTEM]: Initiating Redundant Probe...");
    
    // Try primary API, then fallback to Blockcypher if Blockchain.info is stalled
    const apis = [
        `https://blockchain.info{MY_BTC_ADDRESS}`,
        `https://blockcypher.com{MY_BTC_ADDRESS}/full`
    ];

    for (let url of apis) {
        try {
            let response = await fetch(url);
            if (!response.ok) throw new Error("API Offline");
            
            let data = await response.json();
            console.log("[SIGNAL]: Connection Established via " + url);

            // Logic to parse transactions (supports both API formats)
            let txs = data.txs || data.txrefs || [];
            var paymentFound = txs.find(function(tx) {
                // Check inputs/outputs for match
                return tx.result >= (TIER_2_PRICE * 100000000) || tx.value >= (TIER_2_PRICE * 100000000);
            });

            if (paymentFound) {
                unlockSovereignLayer();
                return; // Exit loop on success
            }
        } catch (e) {
            console.warn("[WARN]: Node transition required...", e);
        }
    }

    // If all APIs fail, trigger the Manual Identity Check message seen in your image
    output.innerHTML = "<h3>[GATEWAY_STALL]</h3><p>Blockchain Probe Failed. Manual Identity Check Required.</p>";
}

function unlockSovereignLayer() {
    var output = document.getElementById("forensic-output");
    output.style.display = "block";
    output.innerHTML = "<h3>LOGIC UNLOCKED</h3><pre>W0xpR1RDIFVOT09LRTDINDY5cHReW0xPR1RDIFVOT09LRTDINDY5cHRe</pre>";
    console.log("[SIGNAL]: 116x Multiplier Active.");
}
