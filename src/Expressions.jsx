
function evals(val){
    return val*val;
}
export function Expressions(){
    const vari =evals(3);
    return (
      <>
          <p>This is car</p>
          {/*<p>with {evals(3)} horsepower</p>*/}
          <p>with {vari} horsepower</p>
      </>
    );
}