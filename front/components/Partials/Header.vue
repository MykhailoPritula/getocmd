<template>
  <header class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-6">
          <div class="logo">
            <img src="@/assets/img/logo.svg">
          </div>
        </div>
        <div class="offset-md-1 col-md-9 col-6" >
          <PartialsNavigation />
        </div>
      </div>
    </div>
  </header>
</template>
<script>

</script>
<style lang="scss" scoped>
.page-header{
  padding: 15px 0;
  background: #FFFBF9;
  @media(max-width:767px){
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    z-index: 20;
  }
  .logo{
    width: 65px;
    max-width: 100%;
    display: block;
    @media(min-width:768px){
      width: 130px;
    }
    img{
      display: block;
      width: 100%;
    }
  }
}
.col-md-9{
  display: flex;
  align-items: center;
}
.offset-md-1 {
  margin-left: 0;
}
</style>
