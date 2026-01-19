const { request, gql } = require('graphql-request');

const endpoint = 'https://ap-south-1.cdn.hygraph.com/content/cmkfrkdp800u907wa58yb9opi/master';
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3Njg1NjI3MjgsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2Nta2Zya2RwODAwdTkwN3dhNTh5YjlvcGkvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiJmODMwZGVkNi01YzA3LTQ0ZjctOTM1NC04ZjQ3MTk4ZjFmZDQiLCJqdGkiOiJjbWtnc2wzMzkwaDk4MDdwbDBhM2kxa2xoIn0.ZP9Mo-tYcN9ag7DjmUFhUGarMcJAGy_cAPUghhupE02-jfGyQJErmUHghTXRkvQvpQ-ikLKr7c8gWt-7KVLDFt7TCTXhpZS0LSytPjG-lQhaz5ucwB22VW4-EhG7ecPrDuRHCZ7MlQA-L1k7IFHIfSrH1cNWkfo7ziZ-TsUlFl8AJgqPhsoEsWpbFMWcaOwZVf2a1KFq2JDJyMej_R4s6JlrxatfxuzSfbJmRMnctkbC7v7mOmpCct5Ck8cTQnn-ou6wNXuOLAp4nhBgrN2qf4-nwUWNn1CDjcPZLYJFnKk0qveBG_8NuXE1nA0gUP6oJ_YmXfsYjo-G5zAho3n0EwfIHgMIXNZhHDiPmb5lx_wOUc_nWLbbfI5VJHl1yPGW3KQ330iomb_bkyjZPR_683HtQme4d_O5ld5moLoFQsTNIV3Y8uSPKEdorp792CeFoCGPic1GpxNfCXru_q1_xkkVIOyzVDmCtB8W7Viw4svc90bhAJSWS1tSvEn6RvaYQC0-Gtl5Tv_lNVCx7fnpnDIGQXPVRIP3nmFD-77XnyKm9w3Pjp9WhgTfaHlHYQ-ZSwXBeU5H8oq1W1iQynAlq5uTPf03z9ewk-2znYF7BlL-mf16152icz9p8qhyrgkWQwDgCp9HWvBOr2ayd2J9ISB6xMCgvIUA9JLPqtM7Has';

async function testQuery() {
    const query = gql`
    query GetProducts {
      products {
        id
        name
        slug
        price
        description {
          text
        }
        category {
          name
        }
        sizes
        image {
          url
        }
      }
    }
  `;

    try {
        console.log('Fetching products...');
        const data = await request(endpoint, query, {}, {
            Authorization: `Bearer ${token}`,
        });
        console.log('Success:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
        if (error.response && error.response.errors) {
            console.error('GraphQL Errors:', JSON.stringify(error.response.errors, null, 2));
        }
    }
}

testQuery();
