<?php require_once("header.php"); ?>


<!-- Dashboard Inicial boas viandas primeira view -->

<main>
    
    <h1>Bem vindo(a) <strong>Pedro!</strong></h1>
    
    <legend>Parabéns, Pedro! Você realizou 5 analises a 15 horas atrás. Há novas programações para serem analisadas. Boa sorte! Lorem ipsum maecenas nullam integer Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aspernatur saepe hic aperiam ad minima totam accusamus labore dolor.</legend>
    
    <div class='container'>
        
        <div class='Beetween'>
            <div class='GraphicDashboard'>
                <p>Estatísticas de análises semanais</p>
                <label>Baseada em análises realizadas por você semanalmente.</label>
                <canvas id="myChart"></canvas>
                
            </div>
            
            <div class='TimingAnalisesDashboard'>
                <p>Últimas análises realizadas</p>
                <label>Listagem de análises realizadas</label>
                
                <div>
                    <p> <strong>Camila Queiroz</strong> - realizou uma analise há 3 min</p>
                    <picture>
                        <img src="img/woman1.jpg" alt="">
                    </picture>
                </div>
                <div>
                    <p> <strong>Eduardo Paes</strong> - realizou uma analise há 25 min</p>
                    <picture>
                        <img src="img/man2.jpg" alt="">
                    </picture>
                </div>
                <div>
                    <p> <strong>Carolina da Silva</strong> - realizou uma analise há 30 min</p>
                    <picture>
                        <img src="img/woman2.jpg" alt="">                        
                    </picture>
                </div>
                <div>
                    <p> <strong>Antonio Queiroz</strong> - realizou uma analise há 1 horas</p>
                    <picture>
                        <img src="img/man1.jpg" alt="">                        
                    </picture>
                </div>
                <div>
                    <p> <strong>Eduardo Paes</strong> - realizou uma analise há 2 horas</p>
                    <picture>
                        <img src="img/man2.jpg" alt="">
                    </picture>
                </div>
            </div>
        </div>
        
        
    </div>
    
    <legend id='DireitosReservados'>Sistema de Análise Audiovisual - <strong>SAAV</strong><br>Todos os direitos reservados</legend>
    
</main>



<?php require_once("footer.php"); ?>

<style>
    body
    {
        overflow-y: hidden;
    }
</style>