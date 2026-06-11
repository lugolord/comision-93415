export const withLog = (Component) => {
  function ComponentWithLog (props) {
    console.log('hola esto se agrego en el hoc')

    return (
      <Component {...props} />
    )
  }

  return ComponentWithLog
}
