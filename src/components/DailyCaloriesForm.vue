<template>
  <div class="dialog" >
    <div class="content">
      <form @submit.prevent="onSubmit">
        <div id="dailycaloriesform">
          <span class="close" @click="closeModal">&times;</span>
          <h3>Расчет дневной нормы калорий</h3>
          <label for="weight">Вес в кг:</label>
          <input id="weight" type='text' placeholder="Вес в кг" v-model.number="weight">
          <label for="height">Рост</label>
          <input id="height" type='text' placeholder="Рост в см" v-model.number="height">
          <label for="age">Возраст</label>
          <input id="age" type='text' placeholder="Возраст" v-model.number="age">
          <p>Пол:
            <div> 
              <input type='radio' name="sex" value="female" id="female" v-model="sex">
              <label for="female">Женский</label>
            </div>
            <div> 
              <input type='radio' name="sex" value="male" id="male" v-model="sex">
              <label for="male">Мужской</label>
            </div>
          </p>
          <label for="activity">Активность:</label>
          <select id="activity" v-model.number="activity">
            <option v-for="item in activityArray" :value=item.value>{{ item.text }}</option>
          </select>
          <label for="purpose">Цель</label>
          <select id="purpose" v-model.number="purpose">
            <option v-for="item in purposeArray" :value=item.value>{{ item.text }}</option>
          </select>
          <button class="btn" type="submit">Рассчитать дневной калораж</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'dailycalories-form',
    data() {
        return {
            weight: '',
            height: '',
            age: '',
            sex: '',
            activity: '',
            purpose: '',
            activityArray: [{value: 1.2, text: "Физическая активность отсутствует или минимальна"},
            {value: 1.38, text: "Тренировки средней тяжести 3 раза в неделю"},
            {value: 1.46, text: "Тренировки средней тяжести 5 раз в неделю"},
            {value: 1.55, text: "Интенсивные тренировки 5 раз в неделю"},
            {value: 1.64, text: "Тренировки каждый день"},
            {value: 1.73, text: "Интенсивные тренировки каждый день или 2 раза в день"},
            {value: 1.9, text: "Ежедневная физическая нагрузка + физическая работа"},
            ],
            purposeArray: [{value: -0.2, text: "Сбросить вес"}, {value: -0.1, text: "Рекомпозиция"}, {value: 0.2, text: "Набрать мышечную массу"}]
        }
    },
    methods: {
        onSubmit() {
            const cal = (((this.weight*10)+(this.height*6.5)-(this.age*5)+((this.sex === "female") ? -161:5))*this.activity);
            this.$emit('countCalories', Math.ceil(cal + this.purpose*cal));
            this.closeModal();
        },
        closeModal() {
            this.$emit('close');
        },
    },
};
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