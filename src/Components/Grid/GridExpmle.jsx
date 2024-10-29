import Grid from "./grid";

const GridExpmle = () => {
  return (
    <Grid container gap={2}>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
          Element 1
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ backgroundColor: "lightgreen", padding: "20px" }}>
          Element 2
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ backgroundColor: "lightcoral", padding: "20px" }}>
          Element 3
        </div>
      </Grid>
    </Grid>
  );
};

export default GridExpmle;
