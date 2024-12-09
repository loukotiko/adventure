const fight = {
  fightStep: 0,
  attack() {
    // Faire des attaques physiques
    // Ajouter le résultat
    // Display le résultat et passer à une nouvelle attaque...
    this.fightStep++;
  },
  talk() {
    // Faire des attaques sociales
    // Ajouter le résultat
    // Display le résultat et passer à une nouvelle attaque...
    this.fightStep++;
  },
  checkWin() {
    // if()... this.effectOnWin();
  },
  checkLose() {
    // if()... this.effectOnLose();
  },
  fight() {
    return {
      description: "Bimbamboum",
      actions: [
        { label: "Attaquer", effect: () => this.attack(); },
        { label: "Parlementer", effect: () => this.talk(); },
      ]
    }
  }
}

export default function (props) {
  return {
    ...props,
    ...fight,
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
        case 3:
          return this.fight({
            numberOfOpponents: 1,
            effectOnWin: () => this.step = 4,
            effectOnLose: () => this.step = 5
          });
        case 4:
          return {
            description: "Le combat se passe mal, vous vous enfuyez.",
            actions: [
              { label: "S'enfuir", effect: () => this.nextDay() },
            ]
          }
        case 4:
          return {
            description: "Après un combat acharné, vos adversaires ont pris la fuite. Vous êtes devant leur trésor.",
            actions: [
              { label: "Prendre le butin", effect: () => this.nextDay() },
              { label: "Laisser le butin", effect: () => this.nextDay() },
            ]
          }
      }
    },
    $template: `
        <description>
        <div class="description">
          <p>{{currentStep.description}}</p>
        </div>
        <div class="actions" v-for="action in currentStep.actions">
          <button @click="action.effect">{{action.label}}</button>
        </div>
    `,
  };
}
