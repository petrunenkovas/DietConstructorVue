<template>
  <div class="dialog" >
    <div class="content">
      <form @submit.prevent="onSubmit">
        <div id="dailycaloriesform">
          <span class="close" @click="closeModal">&times;</span>
          <h3>Расчет дневной нормы калорий</h3>
          <label for="weight">Вес в кг:</label>
          <input id="weight" type="number" min="1" step="any" required placeholder="Вес в кг" v-model.number="weight">
          <label for="height">Рост</label>
          <input id="height" type="number" min="1" step="any" required placeholder="Рост в см" v-model.number="height">
          <label for="age">Возраст</label>
          <input id="age" type="number" min="1" step="1" required placeholder="Возраст" v-model.number="age">
          <fieldset>
            <legend>Пол:</legend>
            <div>
              <input type="radio" name="sex" value="female" id="female" required v-model="sex">
              <label for="female">Женский</label>
            </div>
            <div>
              <input type="radio" name="sex" value="male" id="male" v-model="sex">
              <label for="male">Мужской</label>
            </div>
          </fieldset>
          <label for="activity">Активность:</label>
          <select id="activity" v-model.number="activity" required>
            <option disabled value="">Выберите активность</option>
            <option v-for="item in activityArray" :value="item.value">{{ item.text }}</option>
          </select>
          <label for="purpose">Цель</label>
          <select id="purpose" v-model.number="purpose" required>
            <option disabled value="">Выберите цель</option>
            <option v-for="item in purposeArray" :value="item.value">{{ item.text }}</option>
          </select>
          <p v-if="errorMessage" class="form-error" role="alert">{{ errorMessage }}</p>
          <button class="btn" type="submit">Рассчитать дневной калораж</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {ACTIVITY_OPTIONS, PURPOSE_OPTIONS} from '../const';

  const WEIGHT_FACTOR = 10;
  const HEIGHT_FACTOR = 6.5;
  const AGE_FACTOR = 5;
  const FEMALE_ADJUSTMENT = -161;
  const MALE_ADJUSTMENT = 5;

  export default {
    name: 'daily-calories-form',
    data() {
      return {
        weight: '',
        height: '',
        age: '',
        sex: '',
        activity: '',
        purpose: '',
        errorMessage: '',
        activityArray: ACTIVITY_OPTIONS,
        purposeArray: PURPOSE_OPTIONS
        }
    },
    methods: {
      onSubmit() {
          const validMeasurements = [this.weight, this.height, this.age].every(value => Number.isFinite(value) && value > 0);
          const validOptions = (this.sex === 'female' || this.sex === 'male') &&
            this.activityArray.some(item => item.value === this.activity) &&
            this.purposeArray.some(item => item.value === this.purpose);
          if (!validMeasurements || !validOptions) {
              this.errorMessage = 'Заполните все поля корректными значениями.';
              return;
          }
          const sexAdjustment = this.sex === 'female' ? FEMALE_ADJUSTMENT : MALE_ADJUSTMENT;
          const cal = ((this.weight * WEIGHT_FACTOR) + (this.height * HEIGHT_FACTOR) -
            (this.age * AGE_FACTOR) + sexAdjustment) * this.activity;
          const dailyCalories = Math.ceil(cal + this.purpose*cal);
          if (!Number.isFinite(dailyCalories) || dailyCalories <= 0) {
              this.errorMessage = 'Проверьте введённые данные.';
              return;
          }
          this.$emit('countCalories', dailyCalories);
          this.closeModal();
      },
      closeModal() {
          this.$emit('close');
      },
    }
  }
</script>

<style scoped>
label {
    text-align: center;
    padding: 0 5px;
}
#female, #male {
    vertical-align: middle;
    margin-top: 2px;
}
select {
    height: 30px;
}

</style>
