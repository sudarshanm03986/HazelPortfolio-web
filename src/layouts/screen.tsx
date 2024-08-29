const Screen = (props:any) => {
    return ( 
    <div className="w-[100%] h-[100vh] ">
        
      {props.children}

    </div> );
}
 
export default Screen;