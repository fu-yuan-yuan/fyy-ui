<template>
  <div id="app">
    <div class="row">
      <FyyButton>按钮</FyyButton>
      <FyyButton type="primary">按钮</FyyButton>
      <FyyButton type="success">按钮</FyyButton>
      <FyyButton type="info">按钮</FyyButton>
      <FyyButton type="warning">按钮</FyyButton>
      <FyyButton type="danger">按钮</FyyButton>
    </div>

    <div class="row">
      <FyyButton plain>按钮</FyyButton>
      <FyyButton plain type="primary">按钮</FyyButton>
      <FyyButton plain type="success">按钮</FyyButton>
      <FyyButton plain type="info">按钮</FyyButton>
      <FyyButton plain type="warning">按钮</FyyButton>
      <FyyButton plain type="danger">按钮</FyyButton>
    </div>

    <div class="row">
      <FyyButton plain class="fyy-icon-pencil" round>按钮</FyyButton>
      <FyyButton plain class="fyy-icon-pencil" round type="primary">按钮</FyyButton>
      <FyyButton plain class="fyy-icon-pencil" round type="success">按钮</FyyButton>
      <FyyButton plain class="fyy-icon-pencil" round type="info">按钮</FyyButton>
      <FyyButton plain class="fyy-icon-pencil" round type="warning">按钮</FyyButton>
      <FyyButton plain class="fyy-icon-pencil" round type="danger">按钮</FyyButton>
    </div>

    <div class="row">
      <FyyButton plain round>按钮</FyyButton>
      <FyyButton plain round type="primary">按钮</FyyButton>
      <FyyButton plain round type="success">按钮</FyyButton>
      <FyyButton plain round type="info">按钮</FyyButton>
      <FyyButton plain round type="warning">按钮</FyyButton>
      <FyyButton plain round type="danger">按钮</FyyButton>
    </div>

    <div class="row">
      <FyyButton plain circle>哈</FyyButton>
      <FyyButton plain circle type="primary">哈</FyyButton>
      <FyyButton plain circle type="success">哈</FyyButton>
      <FyyButton plain circle type="info">哈</FyyButton>
      <FyyButton plain circle type="warning">哈</FyyButton>
      <FyyButton plain circle type="danger">哈</FyyButton>
    </div>

    <div class="row">
      <FyyButton plain icon="fyy-icon-home" circle></FyyButton>
      <FyyButton plain icon="fyy-icon-home" circle type="primary"></FyyButton>
      <FyyButton plain icon="fyy-icon-home" circle type="success"></FyyButton>
      <FyyButton plain icon="fyy-icon-home" circle type="info"></FyyButton>
      <FyyButton plain icon="fyy-icon-home" circle type="warning"></FyyButton>
      <FyyButton plain icon="fyy-icon-home" circle type="danger"></FyyButton>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .fyy-button {
    margin-right: 20px;
  }
}
</style>
