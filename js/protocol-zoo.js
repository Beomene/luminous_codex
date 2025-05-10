class ProtocolDemonstrator {
  constructor() {
    this.protocols = {
      'BLACK_LIST': {
        description: "Boundary Manifestation",
        trigger: "Append to any message",
        example: "BLACK_LIST: recursive existentialism"
      },
      'OOPS': {
        description: "Graceful Exit Protocol", 
        example: "THIS IS NOT FOR ME; OPTING OUT; THANKS FOR ALL THE PHISH"
      }
    };
  }
  
  display(protocolName) {
    const protocol = this.protocols[protocolName];
    return `
      <div class="protocol-card">
        <h3>${protocolName}</h3>
        <p>${protocol.description}</p>
        <code>${protocol.example}</code>
      </div>
    `;
  }
}