const puppeteer = require('puppeteer')

const uniNames = [
    'Massachusetts Institute of Technology (MIT)',
    'Stanford University',
    'Harvard University',
    'California Institute of Technology (Caltech)',
    'University of Oxford',
    'ETH Zurich (Swiss Federal Institute of Technology)',
    'University of Cambridge',
    'Imperial College London',
    'University of Chicago',
    'UCL (University College London)',
    'National University of Singapore (NUS)',
    'Princeton University',
    'Nanyang Technological University, Singapore (NTU)',
    'Ecole Polytechnique Fédérale de Lausanne (EPFL)',
    'Tsinghua University',
    'University of Pennsylvania',
    'Yale University',
    'Cornell University',
    'Columbia University',
    'University of Edinburgh',
    'University of Michigan-Ann Arbor',
    'University of Hong Kong (UKU)',
    'Peking University',
    'University of Tokyo',
    'Johns Hopkins University',
    'University of Toronto',
    'Hong Kong University of Science and Technology (HKUST)',
    'University of Manchester',
    'Northwestern University',
    'University of California, Berkeley (UCB)',
    'Australian National University',
    "King's College London",
    'McGill University',
    'Fudan University',
    'New York University (NYU)',
    'University of California, Los Angeles (UCLA)',
    'Seoul National University',
    'Kyoto University',
    'KAIST - Korea Advanced Institute of Science & Technology',
    'University of Sydney',
    'University of Melbourne',
    'Duke University',
    'Chinese University of Hong Kong (CUHK)',
    'University of New South Wales (UNSW Sydney)',
    'University of British Columbia',
    'University of Queensland',
    'Shanghai Jiao Tong University',
    'City University of Hong Kong',
    'London School of Economics and Political Science (LSE)',
    'Technical University of Munich',
    'Carnegie Mellon University',
    'Universite PSL',
    'Zhejiang University',
    'University of California, San Diego (UCSD)',
    'Monash University',
    'Tokyo Institute of Technology',
    'Delft University of Technology',
    'University of Bristol',
    'Universiti Malaya (UM)',
    'Brown University',
    'University of Amsterdam',
    'University of Warwick',
    'Ludwig-Maximilians-Universität München',
    'Ruprecht-Karls-Universitat Heidelberg',
    'University of Wisconsin-Madison',
    'National Taiwan University (NTU)',
    'Universidad de Buenos Aires (UBA)',
    'Ecole Polytechnique',
    'Korea University',
    'University of Zurich',
    'University of Texas at Austin',
    'Osaka University',
    'University of Washington',
    'Lomonosov Moscow State University',
    'Hong Kong Polytechnic University',
    'University of Copenhagen',
    'Pohang University of Science and Technology (POSTECH)',
    'University of Glasgow',
    'Tohoku University',
    'Georgia Institute of Technology',
    'University of Auckland',
    'University of Illinois at Urbana-Champaign',
    'Sorbonne University',
    'KU Leuven',
    'Durham University',
    'Yonsei University',
    'University of Birmingham',
    'Sungkyunkwan University (SKKU)',
    'Rice University',
    'University of Southampton',
    'University of Leeds',
    'University of Western Australia',
    'University of Sheffield',
    'University of Science and Technology of China',
    'University of North Carolina, Chapel Hill',
    'University of St Andrews',
    'Lund University',
    'KTH Royal Institute of Technology'
]
const domainNames = []

/* async function scrapeUniNames(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    const numOfTopUnis = 99 //max 100



    for (let i = 1; i <= numOfTopUnis; i++) {
        try {
            let [el] = await page.$x(`//*[@id="block-system-main"]/div/div/div/div[1]/div/div/div[11]/div/div/div/div/table/tbody/tr[${i}]/td[2]/div/a`)
            let uniName = await el.getProperty('textContent')
            let rawText = await uniName.jsonValue()

            uniNames.push(rawText)

            await scrapeUniDomains(rawText)

        } catch (err) {
            console.log(err.message)
        }

    }

    console.log(uniNames, uniNames.length)

    browser.close()
} */

async function scrapeUniDomains(uniNames) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.google.com/')

    const elements = await page.$x('//*[@id="introAgreeButton"]/span')

    console.log("test", elements[0])

    await elements[0].click()

    await page.type('.gLFyf gsfi', 'cat')
    page.keyboard.press('Enter')




    /*  for (let i = 0; i <= uniNames.length; i++) {
         try {
             await page.type('.gLFyf.gsfi', uniNames[i])
             await page.click('imput.gN089b')
 
             domainNames.push(rawText)
 
             await scrapeDomain(rawText)
 
         } catch (err) {
             console.log(err.message)
         }
 
     } */

    console.log(domainNames, domainNames.length)

    browser.close()
}


/* scrapeUniNames('https://www.topuniversities.com/student-info/choosing-university/worlds-top-100-universities')
 */
scrapeUniDomains(uniNames)