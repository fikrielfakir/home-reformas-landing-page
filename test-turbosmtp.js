// Test TurboSMTP API directly
// Run with: node test-turbosmtp.js

const consumerKey = "729c2b97366e89854b2c";
const consumerSecret = "7any1dhESPeCHTvKifwV";

async function testTurboSMTP() {
  console.log("=== Testing TurboSMTP API ===\n");
  
  const payload = {
    from: "Homereformas24@gmail.com",
    to: "elfakirfikri@gmail.com",
    subject: "Test Email from API",
    content: "This is a test email",
    html_content: "<p>This is a <strong>test</strong> email</p>"
  };

  console.log("Payload:", JSON.stringify(payload, null, 2));
  console.log("\nHeaders:");
  console.log("  consumerKey:", consumerKey);
  console.log("  consumerSecret:", consumerSecret);
  console.log("\nSending request to TurboSMTP...\n");

  try {
    const response = await fetch("https://pro.api.serversmtp.com/api/v2/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "consumerKey": consumerKey,
        "consumerSecret": consumerSecret
      },
      body: JSON.stringify(payload)
    });

    console.log("Response Status:", response.status, response.statusText);
    
    const responseText = await response.text();
    console.log("Response Body:", responseText);
    
    try {
      const responseJson = JSON.parse(responseText);
      console.log("\nParsed Response:", JSON.stringify(responseJson, null, 2));
    } catch (e) {
      console.log("(Response is not JSON)");
    }

    if (response.ok) {
      console.log("\n✅ SUCCESS!");
    } else {
      console.log("\n❌ FAILED!");
      console.log("\nPossible issues:");
      console.log("1. Consumer Key/Secret might be invalid");
      console.log("2. Sender email not verified in TurboSMTP");
      console.log("3. Account not active or credits exhausted");
      console.log("4. API endpoint or authentication method incorrect");
    }
  } catch (error) {
    console.error("\n❌ ERROR:", error.message);
  }
}

testTurboSMTP();