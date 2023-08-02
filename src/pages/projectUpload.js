import React, {useState, useRef, useEffect} from "react";
import OptionSet from '../components/optionSet';
import ProjectImageSmall from '../components/projectImageSmall';
import Tabs from "../components/projectPageTabs";
import TagInputField from "../components/tagInputField";
import { PLACEHOLDER_IMAGE, TABULA_GUIDELINES, isNumberKey } from "../lib/utils";
import MessageSection from "../components/messageSection";
import Layout from "../components/layout";
import { withSessionSsr } from "../lib/config/withSession";
import { defaultUser } from "../lib/utils";
import StatusPicker from "../components/statusPicker";

let filler = {'color': ['red', 'green', 'blue']};


export const getServerSideProps = withSessionSsr(
  async ({req, res}) => {
      const user = req.session.user;

      if(!user) {
          return {
            props: { session: defaultUser}
          }
      }

      return {
          props: { session: user}
      }
  }
);

export default function ProjectUpload({session}) {

    const fileref = useRef(null);

    const openFileInput = () => {
        ref.current.trigger('click');
    }

    const [optionsList, setOptionsList] = useState(["COLOR"])

    const addOptions = (label) => {
      if(label.length > 0)
        setOptionsList([...optionsList, label.toUpperCase()]);
    }

    const [newOption, setNewOption] = useState('');

    return(
        <Layout session={session} >
        <div className="ml-16 mr-16 mt-4" style={{whiteSpace:"pre-wrap"}}>
          {TABULA_GUIDELINES}
        </div>
        <section className='section is-clipped'>
          <div className='container'>
            <div className='mb-24 columns is-multiline'>
              <div className='column is-6 p-1'>
                <div className='mb-10 is-relative' style={{ height: 564 }}>
                  <button
                    className='button is-ghost p-0 ml-8 is-absolute is-top-0 is-left-0'
                    style={{ zIndex: 10, top: '50%' }}
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={10}
                      height={18}
                      viewBox='0 0 10 18'
                      fill='none'
                      className=''
                    >
                      <path
                        d='M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z'
                        fill='#212529'
                      />
                    </svg>
                  </button>

                  <figure className="image is-4by3">
                    <img src={PLACEHOLDER_IMAGE} onClick={()=> openFileInput()}/>
                    <input className="file-input" type="file" ref={fileref} id="image-input" style={{display:'hidden'}}/>
                  </figure>

                  
                  <button
                    className='button is-ghost p-0 mr-8 is-absolute is-top-0 is-right-0'
                    style={{ top: '50%' }}
                    href='#'
                  >
                    <svg
                      xmlns={PLACEHOLDER_IMAGE}
                      width={10}
                      height={18}
                      viewBox='0 0 10 18'
                      fill='none'
                      className=''
                    >
                      <path
                        d='M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z'
                        fill='#212529'
                        className=''
                      />
                    </svg>
                  </button>
                </div>

                
                <div className='columns is-mobile is-multiline'>

                {
                  [1,2,3,4].map((item,index)=>{
                    return <ProjectImageSmall name={''} index={item} key={index}/>
                  })
                }
                  
                </div>

              </div>
              <div className='column is-6'>
                <div className='pl-20-desktop'>
                  <div className='mb-6'>
                    <span className='has-text-grey-dark is-size-4'>{'Your Designer Name'}</span>
                    {/* <h1 className='title is-1 is-size-2-touch has-leading-2 has-mw-xl mt-2 mb-6 has-text-white'>
                    <input className="input is-large" type="text" placeholder="Project Name"/>
                    </h1> */}
                    <div className="field mt-2">
                      <div className="control">
                        <input className="input is-large has-text-white"  style={{maxHeight:60, background:"#2B3239", borderColor:"#54606D", borderWidth:2, borderRadius:0}} type="text" placeholder="Enter Product Name"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input is-large"  style={{maxHeight:60, background:"#2B3239", borderColor:"#54606D", borderWidth:2, borderRadius:0}} type="text" placeholder="Enter Price"
                          onKeyDown={(event) => { if (!isNumberKey(event.key)) {event.preventDefault();}}}
                        />
                      </div>
                    </div>
                    <div className="field mb-4">
                      <div className="control">
                        <input className="input is-large"  style={{maxHeight:60, background:"#2B3239", borderColor:"#54606D", borderWidth:2, borderRadius:0}} type="text" placeholder="Enter Total Number of Units"
                        onKeyDown={(event) => { if (!isNumberKey(event.key)) {event.preventDefault();}}}/>
                      </div>
                    </div>

                    <StatusPicker/>
                    <div className="mt-4 mb-8" style={{fontStyle:"italic"}}>Note: Your product must be approved by Tabula to become a group buy. Setting the status to “Group Buy” sends a request to the Tabula Team.</div>

                    <div className="field mt-4">
                      <p className="has-text-grey is-size-4">Deadline: <input type="date" className="has-text-grey" style={{borderStyle:"solid",borderColor:"#54606D",colorScheme:"dark",outline:"none",fontSize:20, background:"#2B3239", borderWidth:2, borderRadius:0, padding:4}}></input></p>
                    </div>

                    


                  </div>

              
                  <div>
                    {optionsList.map((option, index) => (
                      <TagInputField key={index} label={option}/>
                    ))}
                  </div>


                  <div className="field has-addons mb-4" >
                    <div className="control">
                      <input className="input is-info has-text-white" type="text" style={{maxHeight:40, background:"#2B3239", borderColor:"#54606D", borderWidth:2, borderRadius:0}}
                        placeholder="i.e. PCB, color" 
                        value={newOption}
                        onChange={e => { setNewOption(e.currentTarget.value);}}
                      />
                    </div>
                    <div className="control">
                      <input className="input has-background-grey has-text-white" type="submit" value="Add Component" style={{maxHeight:40, borderRadius:0}} onClick={() => {addOptions(newOption); setNewOption("")}}/>
                    </div>
                  </div>
                  
                  


                     

                </div>
              </div>
            </div>
            <div>


                <Tabs content={[
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea is-medium has-text-white" placeholder="Enter Project Description Here" 
                              style={{background:"#2B3239", borderColor:"#54606D", borderWidth:2, borderRadius:0}}></textarea>
                        </div>
                    </div>,
                    <MessageSection messageType="comment"/>,
                    <MessageSection messageType="update" postable={true}/>
                ]

                }/>

                <div className="has-text-centered">
                  <button className="button is-medium">SAVE CHANGES</button>
                </div>

            </div>
          </div>
        </section>
      </Layout>
    );
  }