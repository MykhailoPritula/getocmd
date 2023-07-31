<template>
  <section class="page page-quiz">
    <div class="container">
      <div class="quiz">
        <div class="quiz-area">
          <div class="quiz-inner">
            <fieldset class="fieldset">
              <h2>How old are you?</h2>
              <div class="quiz-list">
                <ul class="quiz-1">
                  <li class="key1"><div class="tab"><span>Key</span>A</div>Under 30 years<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                  <li class="key1"><div class="tab"><span>Key</span>B</div>30-39 years<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                  <li class="key1"><div class="tab"><span>Key</span>C</div>40-49 years<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                  <li class="key1"><div class="tab"><span>Key</span>D</div>50-59 years<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                  <li class="key1"><div class="tab"><span>Key</span>E</div>Over 60 years<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                </ul>
              </div>
              <h2>What is your biggest skin-related concern?</h2>
              <p>Choose as many as you like</p>
              <div class="quiz-list">
                <ul class="quiz-1">
                  <li class="key2"><div class="tab"><span>Key</span>A</div>Wrinkles<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                  <li class="key2"><div class="tab"><span>Key</span>B</div>Fine lines<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                  <li class="key2"><div class="tab"><span>Key</span>C</div>Crêpe skin<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                  <li class="key2"><div class="tab"><span>Key</span>D</div>Patchy skin<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                  <li class="key2"><div class="tab"><span>Key</span>E</div>Other<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                </ul>
              </div>
              <h2>I want to...</h2>
              <div class="quiz-list">
                <ul class="quiz-1">
                  <li class="key3"><div class="tab"><span>Key</span>A</div>Maintain my skin<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                  <li class="key3"><div class="tab"><span>Key</span>B</div>Visibly reduce signs of aging<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                  <li class="key3"><div class="tab"><span>Key</span>C</div>Banish my aging skin altogether<i><svg height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg></i></li>
                </ul>
              </div>
              <button @click="submit">Submit</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods:{
    submit(){
      this.$store.state.loader = true;
      setTimeout(()=>{
        this.$router.push('/');
      }, 1000);
    }
  },
  mounted(){
    const list1 = document.querySelectorAll('.key1')
    list1.forEach(item =>{ 
    item.addEventListener('click', (e) =>{
      list1.forEach(el=>{ el.classList.remove('active'); });
      item.classList.add('active')
      })
    })

    const list2 = document.querySelectorAll('.key2')
    list2.forEach(item =>{ 
    item.addEventListener('click', (e) =>{
      item.classList.toggle('active')
      })
    })

    const list3 = document.querySelectorAll('.key3')
    list3.forEach(item =>{ 
    item.addEventListener('click', (e) =>{
      list3.forEach(el=>{ el.classList.remove('active'); });
      item.classList.add('active')
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.page-quiz{
  background: url('../assets/img/quiz.jpg') no-repeat center top;
  background-size: cover;
  width: 100%;
  text-align: center;
  padding: 30px 0 40px 0;
}
.container{
  @media(min-width:1024px){
    width: 1030px;
  }
}
.quiz{
  &-area{
    height: auto;
    width: 100%;
    position: relative;
    background: #fff;
    display: flex;
  }
  &-inner{
    width: 100%;
    text-align: left;
    margin-bottom: 80px;
    padding: 0px 40px;
    @media(min-width:768px){
      padding:  0px 80px;
    }
  }
  .fieldset{
    h2{
      position: relative;
      margin-bottom: 30px;
      font-weight: 300;
      font-size: 1.5em;
      color: #2d2d2d;
      font-size: 24px;
    }
    p{
      font-size: 16px;
      color: rgb(1, 66, 172);
      margin-bottom: 15px;
    }
    svg{
      fill: rgb(1, 66, 172);
    }
    .quiz-1{
      display: block;
      margin-bottom: 50px;
      .tab{
        position: absolute;
        top: 5px;
        right: calc(100% - 30px);
        border: 1px solid rgb(1, 66, 172);
        color: rgb(1, 66, 172);
        background: #fff;
        text-align: center;
        padding: 6px;
        bottom: 5px;
        line-height: 1;
        width: 22px;
        font-weight: bold;
        display: flex;
        transition: .5s;
        font-size: 14px;
        span{
          display: none;
          font-weight: normal;
          padding-right: 8px;
        }
      }
      .key1, .key2, .key3{
        font-size: 14px;
        transition: .5s;
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 4px;
        border: 1px solid rgb(1, 66, 172);
        background-color: rgba(1, 66, 172, 0.1);
        opacity: 1;
        color: rgb(1, 66, 172);
        max-width: 100%;
        min-width: 75px;
        min-height: 40px;
        outline: 0px;
        padding: 4px 10px 4px 40px;
        transition-duration: 0.1s;
        transition-property: background-color, color, border-color, opacity, box-shadow;
        transition-timing-function: ease-out;
        width: 100%;
        cursor: pointer;
        margin-bottom: 15px;
        justify-content: space-between;
        list-style: none;
        @media(min-width:576px){
          font-size: 18px;
        }
        i{
          opacity: 0;
        }
        &:hover{
          padding-left: 70px;
          transition: .5s;
          box-shadow: rgb(1, 66, 172) 0px 0px 0px 1px inset;
          background-color: #7397d3;
          .tab{
            right: calc(100% - 62px) !important;
            width: auto;
            transition: .5s;
            span{
              display: inline-flex;
            }
          }
        }
      }
      .active{
        padding-left: 70px;
        box-shadow: rgb(1, 66, 172) 0px 0px 0px 1px inset;
        background-color: #7397d3;
        transition: .5s;
        i{
          opacity: 1;
        }
        .tab{
          right: calc(100% - 62px) !important;
          width: auto;
          background: rgb(1, 66, 172);
          color: #fff;
          transition: .5s;
          span{
            display: inline-flex;
          }
        }
      }
    }
    button{
      position: relative;
      font-family: inherit;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      transition-duration: 0.1s;
      transition-property: background-color, color, border-color, opacity, box-shadow;
      transition-timing-function: ease-out;
      outline: none;
      border: 1px solid transparent;
      margin: 0px;
      padding: 6px 14px;
      min-height: 40px;
      background-color: rgb(1, 66, 172);
      color: rgb(255, 255, 255);
      border-radius: 4px;
    }
  }
}
</style>
