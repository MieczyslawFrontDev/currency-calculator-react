import "./style.css";

const Form = () => {
    <form class="formElement js-form">
    <legend class="formElement__legend">Kalkulator walut</legend>
    <p class="formElement__paragraph">
      Wymagane pola oznaczone są gwiazdką*
    </p>
    <p>
      <label class="formElement__label">
        <strong class="formElement__labelText">Kwota (zł):*</strong>
        <input
          type="number"
          class="formElement__field js-amount"
          name="amount"
          min="1"
          step="any"
          placeholder="Wpisz kwotę..."
          required
        />
      </label>
    </p>
    <p>
      <label class="formElement__label">
        <strong class="formElement__labelText">Waluta:*</strong>
        <select name="currency" class="formElement__field js-currency">
          <option value="RUB">Rubel rosyjski</option>
          <option value="BRL">Real brazylijski</option>
          <option value="JPY">Jen japoński</option>
        </select>
      </label>
    </p>
    <div class="flexBox">
      <button type="submit" class="formElement__button js-submit">
        Przelicz
      </button>

      <button
        type="reset"
        class="formElement__button formElement__button--reset js-reset"
      >
        Wyczyść
      </button>
    </div>
    <p class="formElement__paragraph--result">Otrzymana kwota:</p>
    <p class="formElement__result js-result">N/A</p>
  </form>
}

export default Form;