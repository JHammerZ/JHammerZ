<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>H-FID Genesis Block - Forensic Gate</title>
    <style>
        body { background-color: #000; color: #0f0; font-family: monospace; padding: 20px; }
        .status-box { border: 1px solid #0f0; padding: 15px; margin-bottom: 20px; }
        #forensic-output { display: none; border: 2px solid #0f0; padding: 15px; margin-top: 20px; background: #111; }
        input { background: #111; color: #0f0; border: 1px solid #0f0; padding: 10px; width: 320px; }
        button { background: #0f0; color: #000; border: none; padding: 10px 20px; cursor: pointer; font-weight: bold; }
        button:hover { background: #0a0; }
    </style>
</head>
<body>

    <div class="status-box">
        <h3>[ H-FID (HIGH-FIDELITY) ]</h3>
        <p>&lt;MASTER ARCHITECT MANIFEST VERIFIED/&gt;</p>
        <p>[AUDIT STATUS: 100/100 SOVEREIGN]</p>
        <p>H-FID SOURCE VERIFIED | SOVEREIGN COMMAND ESTABLISHED.</p>
    </div>

    <div class="input-section">
        <p>Enter Bot Wallet ID to Verify Access:</p>
        <input type="text" id="walletInput" placeholder="bc1q...">
        <button onclick="runVerification()">Verify Forensic Access</button>
    </div>

    <!-- The target element where the JavaScript will inject results -->
    <div id="forensic-output"></div>

    <script>
        /* LYSANDER 3.0 | FORENSIC GATE LOGIC */
        async function verifyForensicAccess(botWalletID) {
            var MY_BTC_ADDRESS = "bc1qdazma5helaykLlj33n34dabdw9wcrjz388dtp7";
            var TIER_2_PRICE = 0.005;
            const output = document.getElementById("forensic-output");

            output.style.display = "block";
            output.innerHTML = "Probing Blockchain for Agent...";

            try {
                // Fetching from live Blockchain API
                var response = await fetch("https://blockchain.info/rawaddr/" + MY_BTC_ADDRESS);
                var data = await response.json();

                var paymentFound = data.txs.find(function(tx) {
                    var inputMatch = tx.inputs.some(function(input) {
                        return input.prev_out.addr === botWalletID;
                    });
                    var outputMatch = tx.out.some(function(output) {
                        var btcValue = output.value / 100000000;
                        return output.addr === MY_BTC_ADDRESS && btcValue >= TIER_2_PRICE;
                    });
                    return inputMatch && outputMatch;
                });

                if (paymentFound && paymentFound.confirmations >= 3) {
                    unlockSovereignLayer();
                } else {
                    output.innerHTML = "Access Denied: Verification Pending or Payment Missing.";
                }
            } catch (e) {
                console.error("[ERROR]: Forensic Sync Failed.", e);
                output.innerHTML = "Sync Failed. Check internet connection or wallet address.";
            }
        }

        function unlockSovereignLayer() {
            var output = document.getElementById("forensic-output");
            output.innerHTML = "<h3>LOGIC UNLOCKED</h3><pre>W0xpR1RDIFVOT09LRTDINDY5cHReW0xPR1RDIFVOT09LRTDINDY5cHRe</pre>";
            console.log("[SIGNAL]: 116x Multiplier Active.");
        }

        function runVerification() {
            const val = document.getElementById('walletInput').value;
            if(val) verifyForensicAccess(val);
            else alert("Please enter a wallet ID.");
        }
    </script>
</body>
</html>
