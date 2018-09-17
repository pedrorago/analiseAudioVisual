<?php require_once("header.php"); ?>


<!-- View de cadastro de programação -->

<main>
    
    <h2>Cadastro de<strong> Programação</strong></h2>
    <h4>Você está no perfil de um Administrador autorizado para casdastro de programação
        
    </h4>
    
    <div class='container'>
        
        <div class='SingUpContainer'>
            <form class='SingUpForm'>
                <label for="Nome">NOME DA PROGRAMAÇÃO</label>
                <input type="text" placeholder='Digite o nome da programação' name='nome'>
                <div>
                    <span class='spanDiaForm'>
                        <label for="Dia">DIA DE EMISSÃO</label>
                        <select name="DiaEmissao" id="Dia">
                            <option value="Segunda-Feira">Segunda-Feira</option>
                            <option value="Segunda-Feira">Terça-Feira</option>
                            <option value="Segunda-Feira">Quarta-Feira</option>
                            <option value="Segunda-Feira">Quinta-Feira</option>
                            <option value="Segunda-Feira">Sexta-Feira</option>
                            <option value="Segunda-Feira">Sábado</option>
                            <option value="Segunda-Feira">Domingo</option>
                        </select>
                    </span>
                    
                    <span>
                        <label for="Data">DATA DE EMISSÃO</label>
                        <div>
                            <select name="Dia" id="Data">
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            
                            <select name="Mes" id="Mes">
                                <option value="Janeiro">Janeiro</option>
                                <option value="Fevereiro">Fevereiro</option>
                                <option value="Março">Março</option>
                                <option value="Abril">Abril</option>
                                <option value="Maio">Maio</option>
                                <option value="Junho">Junho</option>
                                <option value="Julho">Julho</option>
                                <option value="Agosto">Agosto</option>
                                <option value="Setembro">Setembro</option>
                                <option value="Outubro">Outubro</option>
                                <option value="Novembro">Novembro</option>
                                <option value="Dezembro">Dezembro</option>
                            </select>
                            
                            <select name="Ano" id="Ano">
                                <option value="2025">25</option>
                                <option value="2024">24</option>
                                <option value="2023">23</option>
                                <option value="2022">22</option>
                                <option value="2021">21</option>
                                <option value="2020">20</option>
                                <option value="2019">19</option>
                                <option value="2018" selected>18</option>
                                <option value="2017">17</option>
                                <option value="2016">16</option>
                                <option value="2015">15</option>
                                <option value="2014">14</option>
                                <option value="2013">13</option>
                                <option value="2012">12</option>
                                <option value="2011">11</option>
                            </select>
                        </div>
                    </span>
                </div>
                <label for="Nome">EMISSORA</label>
                <input type="text" placeholder='Digite o nome da emissora' name='emissora'>
                <label for="Nome">FORMATO DO VIDEO</label>
                <select name="formato" id="Formato" style='margin-top:0'>
                    <option value="MP4">MP4</option>
                    <option value="AVI">AVI</option>
                </select>
                
                <div class='inputTimes'>
                    <span>
                        <label for="Inicio">ÍNICIO DA PROGRAMAÇÃO</label>
                        <input type="time" value='00:00' name='inicio' id='Inicio'>
                    </span>
                    <span>
                        <label for="Fim">FIM DA PROGRAMAÇÃO</label>
                        <input type="time" value='00:00' name='fim' id='Fim'>
                    </span>
                </div>
                <button>Cadastrar</button>
            </form>
            <div class='UploadVideo'>
                <label>VÍDEO</label>
                
                <div class='VideoContent'>

                    <div class='videoPreviewContent'>
                        <img src="img/icon11.svg" alt="">
                        <span></span>
                        <video class="videoPreview">
                        </video>
                    </div>


                    <form action="" class='formUploadFile'>
                        <input type="file" id='Upload' hidden name='imagem_file[]' accept="video/mp4,video/x-m4v,video/avi">
                        <label for="Upload">
                            <!-- <img src="img/icon10.svg" alt=""> -->
                            <div class="upload">
                                
                                <svg class="circle" viewBox="0 0 164 164">
                                    <circle cx="82" cy="82" r="80"></circle>
                                    <circle class="active" cx="82" cy="82" r="80"></circle>
                                </svg>
                                
                                <svg class="image" viewBox="0 0 60 60">
                                    <rect fill="currentColor" x="0" y="0" width="60" height="60" rx="11.9999993"></rect>
                                    <circle fill="#8999bc" cx="15" cy="15" r="5"></circle>
                                    <path d="M50,54 L10,54 C7.790861,54 6,52.209139 6,50 L6,44.2867962 C6,44.0993765 6.05266944,43.9157289 6.1520017,43.7567973 L12.6080068,33.4271891 C12.9299296,32.9121126 13.3649277,32.4771145 13.8800042,32.1551917 C15.7533504,30.9843504 18.2211519,31.553843 19.3919932,33.4271891 L26,44 L36.3752674,21.7672841 C36.7726106,20.9158345 37.4570086,20.2314365 38.3084581,19.8340934 C40.3103427,18.8998806 42.6905198,19.7653995 43.6247326,21.7672841 L53.9061831,43.7989639 C53.9679765,43.9313783 54,44.0757261 54,44.2218493 L54,50 C54,52.209139 52.209139,54 50,54 Z" fill="#8999bc"></path>
                                </svg>
                                
                            </div>
                            <p>Upload da programação</p>

                        </label>
                    </form>
                </div>
                <p class='msg'>Apenas arquivos em formato: MP4, AVI</p>
                
                <div class='infoFile'>
                    <label>Arquivo no formato: <p id='FormatoArquivo'> </p></label>
                    <label>Nome do arquivo:    <p id='NomeArquivo'> </p></label>
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