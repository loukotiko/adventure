export default function (props) {
  return {
    ...props,
    dayStep: 0,

    $template: `
        <h2>Jour {{day}}</h2>
        <h1>Rivière ! {{data}}</h1>
        <div v-if="dayStep === 0">
        <button @click="addVitality(1) + dayStep++">Se reposer</button>
        <button @click="addStrength(1) + dayStep++">Pêcher du poisson</button>
        </div>
        <div v-if="dayStep === 1">
        <button @click="nextDay()">Jour suivant</button>
        </div>
      `,
  };
}
