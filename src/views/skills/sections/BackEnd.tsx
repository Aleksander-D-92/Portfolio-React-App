import React from "react";
import {Skill} from "../skill/Skill";
import {SkillSectionTitle} from "./SkillSectionTitle";
import {Grid} from "@material-ui/core";

function BackEnd() {
    return (
        <>
            <SkillSectionTitle value={'Back End'}/>
            <Grid container={true} justify={'center'} alignItems={'center'}>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/java/java-icon.svg'}
                    tooltip={'Java'}
                    animation={'animate__backInLeft'}/>
                <Skill svgUrl={'https://www.vectorlogo.zone/logos/springio/springio-icon.svg'}
                       tooltip={'Spring Core'}
                       animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg'}
                    tooltip={'Spring Boot'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://spring.io/images/projects/spring-security-b712a4cdb778e72eb28b8c55ec39dbd1.svg'}
                    tooltip={'Spring Security'}
                    animation={'animate__backInLeft'}/>
                <Skill svgUrl={'https://i.ibb.co/D74QSpz/thymeleaf-eddited.png'}
                       tooltip={'Thymeleaf'}
                       animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg'}
                    tooltip={'Spring Data JPA'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg'}
                    tooltip={'Hibernate'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg'}
                    tooltip={'Spring GraphQL'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://miro.medium.com/max/692/0*zT7_k4NJrPynFzyV.png'}
                    tooltip={'JUnit and Mockito'}
                    width={280}
                    animation={'animate__backInLeft'}/>
            </Grid>
        </>
    )
}

export {BackEnd}
