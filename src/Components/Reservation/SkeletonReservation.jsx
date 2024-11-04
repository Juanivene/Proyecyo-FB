import Grid from "../Grid/grid";

const SkeletonReservation = () => {
  return (
    <Grid container gap={4} className="m-3">
      <Grid item xs={12} lg={7} className="space-y-4">
        <div className="flex flex-col gap-4 w-auto">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex  flex-col gap-4 w-auto">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </Grid>

      <Grid item xs={12} lg={5}>
        <div className="skeleton h-96  w-auto"></div>
      </Grid>
      <Grid item xs={12} lg={12}>
        <div className="flex flex-col gap-4 w-auto">
          <div className="skeleton h-32 w-full"></div>
        </div>
      </Grid>
    </Grid>
  );
};

export default SkeletonReservation;
