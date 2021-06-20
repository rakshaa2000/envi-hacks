import React from 'react';
import logo from './logo.png';
import "./Home.css"
import { Paper, Tab, Tabs, Box, Typography } from "@material-ui/core";
import { makeStyles,  createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';


const Home = () =>{
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#3f50b5' },
      secondary: { main: '#021626' },
    },
    customError: { color: 'red' }
  });
    const useStyles = makeStyles({
        root: {
        flexGrow: 1,
        },
    });
    
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
    return(
        <>
            <div class="heads">
            <h2 align="center">enviMed - Learn everything about Medical Waste</h2>
            <center><img src={logo} className="logo"></img></center>
            </div>
            <br></br>
            <MuiThemeProvider theme = {theme}>
            <Paper className={classes.root}>
                <Tabs
                    className="tabsbg"
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    
                >
                    <Tab label="What is it" />
                    <Tab label="Environmental Hazards" />
                    <Tab label="Health Impacts" />
                    <Tab label="Types of Waste"></Tab>
                    <Tab label="How to Dispose" />
                </Tabs>
                <TabPanel value={value} index={0}>
                Medical waste is a subset of wastes generated at health care facilities, such as hospitals, physicians' offices, dental practices, blood banks, and veterinary hospitals/clinics, as well as medical research facilities and laboratories. Generally, medical waste is healthcare waste that that may be contaminated by blood, body fluids or other potentially infectious materials and is often referred to as regulated medical waste.  
                <br></br><a href="https://www.epa.gov/rcra/medical-waste">References</a>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <ul>
                    <li>Landfills can contaminate drinking water if they are not properly constructed. Occupational risks exist at disposal facilities that are not well-designed, run, or maintained.</li>
<li> Incineration of waste has been widely practised, but inadequate incineration or the incineration of unsuitable materials results in the release of pollutants into the air and of ash residue. Incinerated materials containing chlorine can generate dioxins and furans, which are human carcinogens and have been associated with a range of adverse health effects. Incineration of heavy metals or materials with high-metal content (in particular lead, mercury, and cadmium) can lead to the spread of toxic metals in the environment.</li>
<li>Only modern incinerators operating at 850–1100°C and fitted with special gas-cleaning equipment are able to comply with the international emission standards for dioxins and furans.</li>
<li> Alternatives to incineration are now available, such as autoclaving, microwaving, steam treatment integrated with internal mixing, and chemical treatment.</li></ul>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    <ul>
                    <li>Radiation burns</li>
                    <li>Sharps-inflicted injuries</li>
                    <li>Poisoning and pollution through the release of pharmaceutical products, in particular, antibiotics and cytotoxic drugs</li>
                    <li>Poisoning and pollution through waste water; and by toxic elements or compounds such as mercury or dioxins that are released during incineration</li></ul>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                    <b>Infectious waste</b>: waste contaminated with blood and other bodily fluids (e.g., from discarded diagnostic samples), cultures and stocks of infectious agents from laboratory work (e.g., waste from autopsies and infected animals from laboratories), or waste from patients in isolation wards and equipment (e.g., swabs, bandages, and disposable medical devices)<br></br>

<b>Pathological waste</b>: human tissues, organs or fluids, body parts, and contaminated animal carcasses<br></br>

<b>Sharps</b>: syringes, needles, disposable scalpels and blades, etc.<br></br>

<b>Chemicals</b>: for example, solvents used for laboratory preparations, disinfectants, and heavy metals contained in medical devices (e.g., mercury in broken thermometers) and batteries<br></br>

<b>Pharmaceuticals</b>: expired, unused, and contaminated drugs and vaccines<br></br>

<b>Genotoxicwaste</b>: highly hazardous, mutagenic, teratogenic, or carcinogenic, such as cytotoxic drugs used in cancer treatment and their metabolites<br></br>

<b>Radioactive waste</b>: such as products contaminated by radionuclides including radioactive diagnostic material or radiotherapeutic materials<br></br>

<b>Nonhazardous or general waste</b>: waste that does not pose any particular biological, chemical, radioactive, or physical hazard.<br></br>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                    <b>Autoclaving</b><br></br>
The process of autoclaving involves steam sterilization. Instead of incineration, which can be expensive, autoclaving simply introduces very hot steam for a determined amount of time. At the end of the process, microorganisms have been completely destroyed. This process is particularly effective because it costs much less than other methods, and doesn’t present any personal health risks. While some biomedical waste isn’t able to be disposed of via autoclaving, around 90% of materials are sanitized this way before being sent on to a landfill.<br></br>

<b>Incineration</b><br></br>
The major benefits of incineration are that it is quick, easy, and simple. It effectively removes the waste entirely, and safely removes any microorganisms. However, when burning hazardous materials, emissions can be particularly dangerous. Some states prefer for waste disposal companies to look towards incineration as their first choice, but materials must be reviewed and determined as safe to burn.<br></br>

<b>Chemicals</b><br></br>
When it comes to liquid waste, a common biomedical waste disposal method can be chemical disinfection. Chlorine is a regular choice for this process, and is introduced to the liquid waste in order to kill microorganisms and pathogens. Chemical disposal can also be used for solid wastes, but it is recommended that they be grinded first to ensure maximum decontamination. Liquid waste, once decontaminated, is then disposed into the sewer system.<br></br>

<b>Microwaving</b><br></br>
During this process, waste is shredded, mixed with water, and then internally heated to kill microorganisms and other harmful elements. One of the main benefits of this process is the shredding aspect; it lowers the volume of biomedical waste, and it is reportedly more energy efficient to use this method than to incinerate. While it can’t be used for all biomedical wastes, it can be utilized for a good 90% of it, just like autoclaving.<br></br>
                    </TabPanel>
            </Paper>
            </MuiThemeProvider>
        </>
    );
}
export default Home;