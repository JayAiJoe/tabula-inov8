import React, {useState, useRef} from "react";
import OptionSet from '../components/optionSet';
import ProjectImageSmall from '../components/projectImageSmall';
import Tabs from "../components/projectPageTabs";
import ImageUpload from "../components/imageUpload";
import { TagsInput } from "react-tag-input-component"; 
import TagInputField from "../components/tagInputField";
import { set } from "date-fns";
import { PLACEHOLDER_IMAGE, isNumberKey } from "../lib/utils";


let filler = {'color': ['red', 'green', 'blue']};


export default function ProjectUpload({ }) {

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
        <>
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
                    return <ProjectImageSmall name={''} index={item} />
                  })
                }
                    
                  

                </div>
              </div>
              <div className='column is-6'>
                <div className='pl-20-desktop'>
                  <div className=''>
                    <span className='has-text-grey-dark is-size-4'>{'Your Designer Name'}</span>
                    {/* <h1 className='title is-1 is-size-2-touch has-leading-2 has-mw-xl mt-2 mb-6 has-text-white'>
                    <input class="input is-large" type="text" placeholder="Project Name"/>
                    </h1> */}
                    <div class="field mt-2">
                      <label class="label is-medium">Project Name</label>
                      <div class="control">
                        <input class="input is-medium"  style={{maxHeight:40}} type="text" placeholder="My Keyboard"/>
                      </div>
                    </div>
                    <div className='mb-0'>
                      {/* <progress
                        className='progress is-info'
                        value={50}
                        max={100}
                      /> */}
                    </div>

                    <div class="columns mb-2" >
                      <div class="column">
                          <div class="field">
                            <label class="label is-medium">Price</label>
                            <div class="control">
                              <input class="input is-medium"  style={{maxHeight:40}} type="text" placeholder="10000.00"
                                onKeyDown={(event) => { if (!isNumberKey(event.key)) {event.preventDefault();}}}
                              />
                            </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="field">
                            <label class="label is-medium">Max Quantity</label>
                            <div class="control">
                              <input class="input is-medium"  style={{maxHeight:40}} type="text" placeholder="300"
                              onKeyDown={(event) => { if (!isNumberKey(event.key)) {event.preventDefault();}}}/>
                            </div>
                          </div>
                      </div>
                    </div>


                  </div>

                  
                  {/* {Object.keys(filler).map((key) => (
                    <OptionSet name={key} options={filler[key]}/>
                  ))} */}
                  
                  <div>
                    {optionsList.map((option, index) => (
                      <TagInputField key={index} label={option}/>
                    ))}
                  </div>


                  <div class="field has-addons" >
                    <div class="control">
                      <input class="input is-info" type="text" style={{maxHeight:40}} 
                        placeholder="More option categories" 
                        value={newOption}
                        onChange={e => { setNewOption(e.currentTarget.value);}}
                      />
                    </div>
                    <div class="control">
                      <input class="input has-background-info is-info has-text-white" type="submit" value="Add" style={{maxHeight:40}} onClick={() => addOptions(newOption)}/>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label is-medium">Personal Link</label>
                    <div class="control">
                      <input class="input"  style={{maxHeight:40}} type="text" placeholder="Link to social media or personal website"/>
                    </div>
                  </div>

                  
                  <div class="field mt-8">
                      <div class="control">
                        <button class="button is-fullwidth is-info">Publish</button>
                      </div>
                    </div>
                    
                 
                  {/* <div className='is-flex is-align-items-center'>
                    <p className='mb-0 mr-8 has-text-grey has-text-weight-bold'>
                      FOLLOW DESIGNER
                    </p>
                    <button
                      className='mr-1'
                      style={{ width: 32, height: 32 }}
                    >
                      <img
                        className='image'
                        src='yofte-assets/buttons/facebook-circle.svg'
                        alt=''
                      />
                    </button>
                    <button
                      className='mr-1'
                      style={{ width: 32, height: 32 }}
                    >
                      <img
                        className='image'
                        src='yofte-assets/buttons/instagram-circle.svg'
                        alt=''
                      />
                    </button>
                    <button style={{ width: 32, height: 32 }}>
                      <img
                        className='image'
                        src='yofte-assets/buttons/twitter-circle.svg'
                        alt=''
                      />
                    </button>
                  </div> */}

                </div>
              </div>
            </div>
            <div>


                <Tabs content={[
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea is-medium" placeholder="Enter Project Description Here"></textarea>
                        </div>
                    </div>,
                    <p className="is-size-4">Community Forum under development</p>,
                    <p className="is-size-4">Project Status Updates under development</p>
                ]

                }/>

                


            </div>
          </div>
        </section>
      </>
    );
  }