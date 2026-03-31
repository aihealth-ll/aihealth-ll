import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Card from '../components/Card';
import CardImage from '../components/Card/CardImage';
import CardBody from '../components/Card/CardBody';
import CardFooter from '../components/Card/CardFooter';

export default function Governance(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Team"
      description="VCU Living Lab Team">
      <main className="container margin-vert--lg">
        <h1>Our Team</h1>

        {/* Program Leadership */}
        <div className="row margin-bottom--5px">
          <div className="col col--12">
            <h2 className="text--left">Program Leadership</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/spinola-new.jpg"
                alt="Dr. Rodrigo Spinola"
                title="Dr. Rodrigo Spinola"
              />
              <CardBody>
                <h3>Dr. Rodrigo Spinola  
                  <span className="badge badge--primary">Director</span>
                </h3>
                <p>Associate professor at VCU, head of technical debt research team. Co-Director of the SE Center.</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/rodrigoospinola/' 
                email='spinolaro@vcu.edu'
                websiteUrl='https://www.rodrigospinola.com/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Damevski.jpg"
                alt="Dr. Kostadin Damevski"
                title="Dr. Kostadin Damevski"
              />
              <CardBody>
                <h3>Dr. Kostadin Damevski
                  <span className="badge badge--primary">Program Coordinator</span>
                </h3>
                <p>Associate professor at VCU. Co-Director of the SE Center.</p>
              </CardBody>
              <CardFooter
                websiteUrl="https://damevski.github.io/"
                linkedinUrl='https://www.linkedin.com/in/kostadin-damevski-b3414/'>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Researchers */}
        <div className="row margin-bottom--5px margin-top--lg">
          <div className="col col--12">
            <h2 className="text--left">Researchers</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/user.jpg"
                alt="Dr. Nan Xi"
                title="Dr. Nan Xi"
              />
              <CardBody>
                <h3>Dr. Nan Xi</h3>
                <p>Researcher at VCU</p>
              </CardBody>
              <CardFooter
                email='xin@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/nan-xi-639a7030b/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/preetam_ghosh.jpg"
                alt="Dr. Preetam Ghosh"
                title="Dr. Preetam Ghosh"
              />
              <CardBody>
                <h3>Dr. Preetam Ghosh</h3>
                <p>Researcher at VCU</p>
              </CardBody>
              <CardFooter
                email='pghosh@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/preetam-ghosh-5441502/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/bridget_mcinnes.jpg"
                alt="Dr. Bridget McInnes"
                title="Dr. Bridget McInnes"
              />
              <CardBody>
                <h3>Dr. Bridget McInnes</h3>
                <p>Researcher at VCU</p>
              </CardBody>
              <CardFooter
                email='btmcinnes@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/bridget-mcinnes-1b15b631/'>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Medical Researchers */}
        <div className="row margin-bottom--5px margin-top--lg">
          <div className="col col--12">
            <h2 className="text--left">Medical Researchers</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Boyan.jpg"
                alt="Dr. Barbara Boyan"
                title="Dr. Barbara Boyan"
              />
              <CardBody>
                <h3>Dr. Barbara Boyan</h3>
                <p>Executive director of the VCU institute for engineering and medicine</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/barbara-d-boyan-91854116/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Falcao.jpg"
                alt="Dr. Daniel Falcao"
                title="Dr. Daniel Falcao"
              />
              <CardBody>
                <h3>Dr. Daniel Falcao</h3>
                <p>Associate professor and interim chief of the division of vascular neurology at VCU health</p>
              </CardBody>
              <CardFooter
                email='daniel.falcao@vcuhealth.org'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Campos.jpg"
                alt="Dr. Guilherme Campos"
                title="Dr. Guilherme Campos"
              />
              <CardBody>
                <h3>Dr. Guilherme Campos</h3>
                <p>Paul J. Nutter professor of surgery, chairman of the bariatric and gastrointestinal surgery division at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/guilherme-m-campos-md-phd-facs-fasmbs-95627a55/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Haight.jpg"
                alt="Dr. Taylor Haight"
                title="Dr. Taylor Haight"
              />
              <CardBody>
                <h3>Dr. Taylor Haight</h3>
                <p>Stroke neurologist at VCU health</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/taylornhaight/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/joe_seacrist.jpg"
                alt="Dr. Joe Seacrist"
                title="Dr. Joe Seacrist"
              />
              <CardBody>
                <h3>Dr. Joe Seacrist</h3>
                <p>Medical Researcher</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/joe-seacrist-23538240/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/dominic_gigliotti.jpg"
                alt="Dr. Dominic Gigliotti"
                title="Dr. Dominic Gigliotti"
              />
              <CardBody>
                <h3>Dr. Dominic Gigliotti</h3>
                <p>Medical Researcher</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/dominic-j-gigliotti-do-ms-a-ed-9b672b136/'>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Students */}
        <div className="row margin-bottom--5px margin-top--lg">
          <div className="col col--12">
            <h2 className="text--left">Students</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/David.jpg"
                alt="David Ferrufino"
                title="David Ferrufino"
              />
              <CardBody>
                <h3>David Ferrufino</h3>
                <p>PhD grad student at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/david-ferrufino-29354a130/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Sotolani.jpg"
                alt="Rodrigo Sotolani"
                title="Rodrigo Sotolani"
              />
              <CardBody>
                <h3>Rodrigo Sotolani</h3>
                <p>PhD grad student at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/rsotolani/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Lauren.jpg"
                alt="Lauren Viado"
                title="Lauren Viado"
              />
              <CardBody>
                <h3>Lauren Viado</h3>
                <p>Undergraduate computer science major at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/lauren-viado/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/christiana_nardi.jpg"
                alt="Christiana Nardi"
                title="Christiana Nardi"
              />
              <CardBody>
                <h3>Christiana Nardi</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='nardic@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/christiana-nardi'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/trang_nguyen.jpg"
                alt="Trang Nguyen"
                title="Trang Nguyen"
              />
              <CardBody>
                <h3>Trang Nguyen</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='nguyent77@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/trang-nguyen-4b9a79289/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/ngoc_nguyen.jpg"
                alt="Ngoc Nguyen"
                title="Ngoc Nguyen"
              />
              <CardBody>
                <h3>Ngoc Nguyen</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='nguyennn9@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/ngoc-nguyen-3113b127a/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/andrew_nelson.jpg"
                alt="Andrew Nelson"
                title="Andrew Nelson"
              />
              <CardBody>
                <h3>Andrew Nelson</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='nelsonas4@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/andrewnelsonsoftware1357/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/aaron_tuck.jpg"
                alt="Aaron Tuck"
                title="Aaron Tuck"
              />
              <CardBody>
                <h3>Aaron Tuck</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='tucka@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/aaron-tuck-90626a349/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/user.jpg"
                alt="Emily Torres"
                title="Emily Torres"
              />
              <CardBody>
                <h3>Emily Torres</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='torresem3@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/emily-torres-6304b0367/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/user.jpg"
                alt="Tianna Carter"
                title="Tianna Carter"
              />
              <CardBody>
                <h3>Tianna Carter</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='cartertn6@vcu.edu'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/fariha_islam.jpg"
                alt="Fariha Islam"
                title="Fariha Islam"
              />
              <CardBody>
                <h3>Fariha Islam</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='islamf7@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/farihahere/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/sadaf_rasooli.jpg"
                alt="Sadaf Rasooli"
                title="Sadaf Rasooli"
              />
              <CardBody>
                <h3>Sadaf Rasooli</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='rasoolis@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/sadaf-rasooli/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/jack_travers.jpg"
                alt="Jack Travers"
                title="Jack Travers"
              />
              <CardBody>
                <h3>Jack Travers</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='traversj@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/jack-travers-cs/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/sergio_perez.jpg"
                alt="Sergio Perez-Ibarra"
                title="Sergio Perez-Ibarra"
              />
              <CardBody>
                <h3>Sergio Perez-Ibarra</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='perezibarrs@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/sergio-perez-ibarra/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/user.jpg"
                alt="Bibi Zahra Hakimi"
                title="Bibi Zahra Hakimi"
              />
              <CardBody>
                <h3>Bibi Zahra Hakimi</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='hakimib@vcu.edu'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/eric_keeton.jpg"
                alt="Eric Keeton"
                title="Eric Keeton"
              />
              <CardBody>
                <h3>Eric Keeton</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='keetonem@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/eric-keeton-509a032a9/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/victoria_gomes.jpg"
                alt="Victória Gomes"
                title="Victória Gomes"
              />
              <CardBody>
                <h3>Victória Gomes</h3>
                <p>Student at VCU</p>
              </CardBody>
              <CardFooter
                email='oliveiragov@vcu.edu'
                linkedinUrl='https://www.linkedin.com/in/victoriaogomes/'>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
}