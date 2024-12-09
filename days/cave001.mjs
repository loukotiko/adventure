export default function (props) {
  return {
    ...props,
    step: 0,
    get currentStep() {
      switch(this.step) {
        case 0:
        default:
          return {
            description: "Vous sentez une bonne odeur émaner d'une grotte. Vous y entendez des pirates prendre du bon temps.",
            actions: [
              { label: "Approcher discrètement pour les observer", effect: () => this.step = 1 },
              { label: "Se présenter directement", effect: () => this.step = 2 },
            ]
          }
        case 1:
          return {
            description: "Vous entendez des discussions à propos d'un trésor. Vous obtenez 1 emplacement de trésor.",
            actions: [
              { label: "Revenir plus tard", effect: () => this.nextDay() },
              { label: "Se présenter", effect: () => this.step = 2 },
            ]
          }
        case 2:
          return {
            description: "Les pirates vous dévisagent, prêts à dégainer leurs armes.",
            actions: [
              { label: "S'enfuir", effect: () => this.nextDay() },
              { label: "Engager le combat", effect: () => this.step = 3 },
            ]
          }
      }
    },
    $template: `
        <description>
        <div class="description">
          <p>{currentStep.description}</p>
        </div>
        <div class="actions" v-for="action in currentStep.actions">
          <button @click="action.effect">{action.label}</button>
        </div>
    `,
  };
}
