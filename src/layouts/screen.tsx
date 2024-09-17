const Screen = (props:any) => {
    return ( 
      <section className="w-[100%] min-h-[100vh] h-fit flex justify-center">
        <div className=" lg:w-[80%] min-h-[100vh] h-fit ">
            
          {props.children}

        </div>
    </section> );
}
 
export default Screen;