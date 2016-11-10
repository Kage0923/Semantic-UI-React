import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ModalExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Size'
      description='A modal can vary in size.'
      examplePath='modules/Modal/Variations/ModalExampleSize'
    />
    <ComponentExample
      title='Dimmer Variations'
      description='A modal can specify dimmer variations.'
      examplePath='modules/Modal/Variations/ModalExampleDimmer'
    />
    <ComponentExample
      title='Close Config'
      description='Modal can config not to close by escape or dimmer click.'
      examplePath='modules/Modal/Variations/ModalExampleCloseConfig'
    />
  </ExampleSection>
)

export default ModalExamples