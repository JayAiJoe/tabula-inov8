const MessageSection = ({messageType, messages = [], postable = false}) => {
    return(
        <>
            {postable && 
                <div className="mb-4">
                    <div className="form">
                    <div className="is-size-4 mb-2">WRITE A{messageType.toLowerCase() == "update" ? "N UPDATE" : " COMMENT"}</div>
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea is-medium has-text-white" placeholder={messageType.toUpperCase()}
                                style={{background:"#2B3239", borderColor:"#54606D", borderWidth:2, borderRadius:0}}></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <button className="button is-small is-pulled-right">POST {messageType.toUpperCase()}</button>
                    </div>
                    </div>
                    <div className="mt-20"><hr style={{color:"white", backgroundColor:"white", height:2}}></hr></div>
                </div>
            }

            {messages.map((message, key) => (
                <div className="box has-text-white"  style={{background:"#2B3239", borderColor:"#54606D", borderWidth:2, borderRadius:0}}>
                    <div className="level">
                        <p className="level-left is-size-4" style={{fontWeight:600}}>{message.user.username}</p>
                        <p className="level-right has-text-grey mb-auto" style={{fontWeight:600}}>
                            {messageType.toLowerCase() == "update" ? message.date : "Reply"}
                        </p>
                    </div>
                    <p>{message.body}</p>
                </div>
            ))
            }
        </>

    );

}

export default MessageSection;