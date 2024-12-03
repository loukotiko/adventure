export default function (props) {
  return {
    ...props,
    $template: `
        <h2>Jour {{day}}</h2>
        <h1>Chateau ! {{data}}</h1>
        <button @click="nextDay()">Jour suivant</button>
    `,
  };
}
