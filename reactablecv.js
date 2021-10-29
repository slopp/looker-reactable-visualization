import React from 'react'
import ReactDOM from 'react-dom'
import Reactable from 'reactable'

var Table = Reactable.Table,
    Tr = Reactable.Tr;



looker.plugins.visualizations.add({
    create: function(element, config) {

        var container = element.appendChild(document.createElement("div"));
      
        // Create an element to contain the text.
        this._tableElement = container.appendChild(document.createElement("div"));

  
    },
    updateAsync: function(data, element, config, queryResponse, details, done) {

        ReactDOM.render(
            <Table className="table" data={[
                { name: 'Row one', content: 'These are regular data rows' },
                { name: 'Row two', content: 'They work like above' },
            ]} >
                <Tr className="special-row"
                    data={{ name: 'Other Row' , content: 'This is a different row' }} />
            </Table>,
            this._tableElement
        );
        
        done()
  
    },
    options: {
        font_size: {
          type: "string",
          label: "Font Size",
          values: [
            {"Large": "large"},
            {"Small": "small"}
          ],
          display: "radio",
          default: "large"
        }
      }

  })