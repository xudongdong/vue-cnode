;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-index" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M123.992064 582.654976l58.326016 0 0 300.071936c0 59.056128 41.385984 79.997952 76.823552 79.997952 2.286592 0 4.099072-0.098304 4.900864-0.169984l160.689152 0 0-318.48448c0-5.424128 4.219904-9.339904 4.876288-9.706496l165.49376-0.193536c1.714176 1.045504 4.729856 7.709696 4.815872 10.653696 0.279552 9.119744 0.060416 225.497088-0.012288 291.581952l-0.012288 26.14784L759.452672 962.553856c28.189696 0 52.07552-13.28128 69.088256-38.455296 11.068416-16.345088 15.336448-32.202752 16.077824-35.219456l0.560128-2.262016 1.118208-305.934336 56.382464 0c19.955712 0 36.3264-8.87808 46.09024-24.974336 7.115776-11.723776 10.569728-27.022336 10.569728-46.736384L959.33952 498.260992l-7.602176-7.61344c-39.14752-39.293952-416.6144-418.098176-418.146304-419.606528-6.106112-6.020096-15.043584-9.07264-26.550272-9.07264-10.422272 0-18.763776 3.040256-24.869888 9.097216L65.312768 496.412672l0 10.580992c0 19.494912 6.531072 38.272 18.388992 52.878336C95.291392 574.142464 110.347264 582.654976 123.992064 582.654976zM903.698432 528.4096c-0.253952 0.023552-0.595968 0.03584-1.019904 0.03584L793.662464 528.44544l-1.093632 350.560256c-2.750464 8.39168-12.174336 31.328256-33.11616 31.328256L652.722176 910.333952c0.050176-39.816192 0.29184-256.459776-0.03584-267.040768-0.256-8.950784-3.453952-22.984704-11.63776-35.511296-10.78784-16.539648-26.768384-25.63584-45.00992-25.63584L429.60896 582.146048c-30.717952 0-57.65632 28.944384-57.65632 61.9264l0 266.261504-109.246464-0.048128-3.56352 0.218112c-21.16096 0-24.018944-14.03392-24.018944-27.776l0-352.28672L128.103424 530.441216c-2.530304-2.067456-6.725632-6.77376-8.768512-14.107648L507.978752 119.735296l398.019584 399.418368C905.39008 524.299264 904.392704 527.023104 903.698432 528.4096z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-setting" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M946.367 490.105c0.02-21.85-13.04-38.49-31.74-41.57-18.69-3.07-79.05-13.01-85.99-14.14-6.95-1.15-14.09-8.07-15.4-11.45-1.32-3.37-8.94-22.2-11.87-29.46-2.95-7.27-1.92-16.58 4.39-25.52 6.3-8.93 39.9-55.87 48.38-67.72 8.49-11.87 8.65-34.61-4.84-48.39-13.48-13.78-47.75-47.09-56.73-55.86-8.99-8.76-31.08-8.64-42.67-0.43-11.58 8.2-71.69 51.01-71.69 51.01s-9.97 6.89-20.67 2.64c-10.7-4.24-33.43-14.07-33.43-14.07s-7.19-5.43-9.68-19.79c-2.5-14.37-11.11-65.28-14.07-82.7-2.97-17.42-20.67-29.62-37.83-29.46-17.16 0.14-57.91 0-74.33 0s-32.26 15.68-34.75 29.46c-2.49 13.79-11.56 69.16-14.07 84.45-2.52 15.3-11.44 18.48-11.44 18.48s-19.56 8.06-29.91 12.31c-10.34 4.26-15.39 2.64-30.35-7.48-14.95-10.11-44.74-31.03-63.04-43.83-18.3-12.81-38.12-7.92-49.26 3.52s-36.06 35.77-51.02 50.43c-14.95 14.66-12.61 37.54 0.58 55.71 13.2 18.18 32.34 45.43 41.35 58.21 9.01 12.78 10.84 19.5 8.36 26.82-2.49 7.34-6.64 16.58-11.43 27.72-4.81 11.13-9.69 13.64-27.86 17.01-17.36 3.21-58.42 9.92-77.4 13.31-18.99 3.37-30.66 21.43-30.66 41.81l0 64.66c0 24.34 13.2 37.24 38.42 41.93 25.22 4.69 62.66 10.66 74.77 12.61 12.1 1.95 17.67 6.6 21.41 15.54 3.73 8.94 5.13 10.12 9.37 22.57 4.26 12.47 6.46 15.55-4.98 31.67-11.44 16.13-34.31 48.11-46.03 64.51-11.74 16.4-6.45 37.83 4.98 49.85 11.44 12.03 35.47 35.64 48.97 48.97 13.49 13.33 35.19 16.28 53.36 3.52 18.19-12.75 54.98-38.99 65.69-46.62 10.7-7.63 21.91-5.28 27.85-2.94 5.94 2.35 11.25 4.6 22 9.1 10.73 4.48 13.85 11.2 16.41 23.45 2.57 12.24 10.19 56.85 13.93 78.59 3.75 21.72 18.91 33.43 40.62 33.72 21.7 0.29 33.27 0.12 61.57 0 28.29-0.13 41.86-12.61 45.45-31.38 3.59-18.76 12.45-72.94 14.22-83.72 1.78-10.76 5.94-14.73 13.63-18.47 7.7-3.74 14.32-6.47 26.84-11.88 12.51-5.4 18.91-0.66 27.7 5.72 8.8 6.39 47.51 33.78 63.78 45.31 16.28 11.53 36.73 10.33 51.9-4.4 15.18-14.73 31.62-30.99 49.27-48.38 17.64-17.4 12.16-39.59 4.4-51.46-7.77-11.88-44.49-62.95-49.71-70.23-5.21-7.28-4.4-18.62-1.75-24.63 2.64-6.01 8.44-18.24 11.72-25.22 3.29-6.97 9.6-11.22 18.18-12.9 8.58-1.69 62.72-11 83.75-14.61 21.03-3.64 31.11-19.92 31.26-39.92C946.427 536.065 946.347 507.475 946.367 490.105zM908.587 557.385c0.21 5.76-4.66 10.65-8.82 11.38-4.17 0.73-63.26 11.38-81.48 14.29-18.21 2.92-33.23 15.07-38.72 28.06-3.98 9.44-5.47 13.51-10.59 26.96-5.12 13.44-4.64 32.19 2.56 42.26 7.2 10.08 46.82 64.9 50.38 70.45s4.27 11.95-1.28 17.5-40.99 41.2-47.39 47.39c-6.41 6.19-11.83 4.8-18.79 0-6.95-4.8-39.61-26.39-64.44-44.36-16.96-12.28-32.82-12.43-48.7-6.02-15.87 6.42 1.28-0.28-22.2 8.97-23.48 9.25-30.23 27.62-33.73 48.24-3.5 20.63-10.67 62.98-11.95 70.45-1.28 7.47-5.55 11.1-13.66 11.1l-64.9 0c-8.11 0-11.74-2.99-14.52-11.95-2.77-8.97-10.03-54.87-12.8-74.29-2.78-19.43-13.82-36.12-24.77-40.56-10.94-4.45-4.98-2.14-27.32-11.1-22.34-8.97-39.63-4.5-51.23 3.84-11.61 8.34-58.64 42.69-65.33 46.96-6.68 4.28-14.65 3.28-18.35-0.42-3.7-3.7-40.56-40.56-46.54-46.54-5.98-5.98-5.36-12.92 0-20.49 5.36-7.58 28.39-40.76 40.99-57.95 12.59-17.2 17.93-34.74 9.82-53.49-8.12-18.74-4.42-10.24-12.39-28.6-7.96-18.36-24.28-24.46-38.42-26.9-14.14-2.43-68.88-11.53-76.85-13.23-7.97-1.71-11.95-7.26-11.95-14.09l0-66.18c0-9.53 7.67-12.44 12.38-13.23 4.7-0.8 54.22-9.18 73-12.39 18.79-3.2 36.36-11.32 43.55-29.03 7.19-17.7 4.27-11.1 11.1-27.32 6.83-16.23 3.8-33.94-7.68-49.96-11.49-16.01-38.85-54-44.4-61.9-5.55-7.9-5.77-12.6 0.85-19.21 6.62-6.62 42.05-42.48 46.96-46.97 4.91-4.48 12.07-5.4 18.36-0.85 6.3 4.55 49.31 35.65 64.04 46.11 14.73 10.46 32.35 12.56 49.1 5.55 16.75-7.02 10.25-4.48 26.9-11.1s24.84-19.09 28.18-39.71c3.33-20.61 11.95-74.14 12.81-77.7 0.85-3.55 5.55-10.46 11.74-10.46s65.82 0.07 69.8 0c3.99-0.07 10.3 3.29 11.32 9.18 1.02 5.9 13.02 74.29 14.94 86.25 1.92 11.95 15.58 28.57 25.54 32.73 9.96 4.16 21.35 8.75 31.31 13.09 9.97 4.34 30.13 1.91 36.15-2.28 6.03-4.18 70.52-48.81 75.43-52.37 4.91-3.56 11.52-3.27 17.64 2.85s43.34 43.19 47.54 47.53c4.19 4.34 4.66 8.66 1.14 13.66-3.53 5.01-36.72 51.8-47.54 67.46-10.81 15.65-11.73 33.73-5.41 48.96 6.33 15.22 3.99 9.39 9.11 21.91 5.13 12.53 16.28 29.03 33.59 31.88 17.31 2.85 76.92 12.74 84.82 13.95 7.9 1.21 11.1 7.18 11.1 13.37S908.377 551.615 908.587 557.385z"  ></path>'+
      ''+
      '<path d="M526.833 322.805c-110.45 0-200 89.54-200 200s89.55 200 200 200c110.46 0 200-89.54 200-200S637.293 322.805 526.833 322.805zM526.833 687.805c-91.12 0-165-73.87-165-165s73.88-165 165-165c91.13 0 165 73.87 165 165S617.963 687.805 526.833 687.805z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-back" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M699.682032 196.538235 654.097834 150.954037 338.868359 466.183512 338.859149 466.174302 293.274952 511.759523 293.283138 511.768733 293.274952 511.776919 338.859149 557.361117 338.868359 557.351907 654.097834 872.581382 699.682032 826.997184 384.452557 511.768733Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-share" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M737 615.846c-62.377 0-115.961 37.107-140.815 90.277l-254.907-117.623c19.939-26.1 32.261-58.431 32.261-93.807 0-35.515-12.461-67.915-32.539-94.154l251.377-125.723c22.846 57.669 78.923 98.723 144.623 98.723 85.846 0 155.769-69.923 155.769-155.769s-69.923-155.769-155.769-155.769-155.769 69.923-155.769 155.769c0 7.823 1.246 15.3 2.285 22.777l-267.923 133.961c-26.793-21.877-60.577-35.585-97.823-35.585-85.915 0-155.769 69.923-155.769 155.769s69.854 155.769 155.769 155.769c37.315 0 71.1-13.707 97.961-35.654l269.1 124.061c-2.215 10.593-3.6 21.531-3.6 32.746 0 85.846 69.923 155.769 155.769 155.769s155.769-69.923 155.769-155.769-69.923-155.769-155.769-155.769zM737 96.615c66.807 0 121.154 54.346 121.154 121.154s-54.346 121.154-121.154 121.154-121.154-54.346-121.154-121.154 54.346-121.154 121.154-121.154zM217.769 615.846c-66.807 0-121.154-54.346-121.154-121.154s54.346-121.154 121.154-121.154 121.154 54.346 121.154 121.154-54.346 121.154-121.154 121.154zM737 892.769c-66.807 0-121.154-54.346-121.154-121.154s54.346-121.154 121.154-121.154 121.154 54.346 121.154 121.154-54.346 121.154-121.154 121.154z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-msg" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M860.71717 842.228073 160.28659 842.228073c-53.601802 0-97.216135-45.666062-97.216135-101.793384L63.070454 295.611671c0-56.098669 43.615357-101.736079 97.216135-101.736079L860.71717 193.875592c53.576219 0 97.188506 45.638433 97.188506 101.736079l0 444.823018C957.905676 796.560988 914.293389 842.228073 860.71717 842.228073zM160.28659 230.828202c-33.236985 0-60.260455 29.049616-60.260455 64.783469l0 444.823018c0 35.762505 27.02347 64.840774 60.260455 64.840774L860.71717 805.275463c33.211403 0 60.231803-29.078269 60.231803-64.840774L920.948973 295.611671c0-35.733852-27.0204-64.783469-60.231803-64.783469L160.28659 230.828202z"  ></path>'+
      ''+
      '<path d="M510.446621 552.302915c-3.662413 0-7.381108-1.111311-10.597359-3.38612L89.011266 259.487939c-8.350179-5.880941-10.347672-17.395182-4.466732-25.716708 5.826705-8.324596 17.367553-10.378371 25.719778-4.468778l410.835949 289.427832c8.352225 5.884011 10.349719 17.395182 4.465708 25.719778C521.989515 549.555337 516.273327 552.302915 510.446621 552.302915z"  ></path>'+
      ''+
      '<path d="M510.503926 552.302915c-5.827729 0-11.515265-2.747577-15.123442-7.852852-5.880941-8.324596-3.883447-19.835767 4.469801-25.719778l410.806273-289.427832c8.324596-5.909593 19.838837-3.854794 25.719778 4.468778 5.880941 8.321526 3.883447 19.835767-4.465708 25.716708L521.100262 548.915771C517.880941 551.191604 514.165316 552.302915 510.503926 552.302915z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-edit" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M886.054743 152.46239c-1.845021 20.7373-3.671623 41.475624-5.539156 62.209854-2.509147 27.867698-5.054109 55.732325-7.575536 83.597977-2.895957 32.013111-5.794983 64.026222-8.670473 96.04138-2.801812 31.18628-5.562692 62.376653-8.364505 93.562932-2.844791 31.682583-5.728468 63.36312-8.579399 95.045703-2.478448 27.536146-4.926196 55.075363-7.404644 82.611509-2.867304 31.847336-5.750981 63.694671-8.630564 95.542007-1.066285 11.778254-2.095731 23.558555-3.222391 35.329646-1.699712 17.729803-16.054651 25.987884-32.29145 18.415418-25.63996-11.954263-51.201126-24.076348-76.788897-36.141128-56.142671-26.472931-112.302739-52.910047-168.374802-79.531358-3.825119-1.814322-5.638417-1.137916-8.147564 2.009773-44.242643 55.501058-88.609107 110.905926-132.956128 166.323073-9.82374 12.275581-23.985274 14.042831-33.486672 3.539616-3.02694-3.345188-5.319146-8.332782-5.832845-12.81077-3.357468-29.281907-6.14086-58.630329-9.097192-87.958284-3.223415-31.978319-6.444782-63.957661-9.638521-95.940073-2.498914-25.02086-5.079692-50.03558-7.320733-75.080999-0.434905-4.853541-1.947352-7.474228-6.695492-9.497305-80.055291-34.108842-160.004157-68.468394-240.004189-102.706173-8.015557-3.431146-13.956873-8.516977-15.233959-17.550725-1.531889-10.828626 3.604084-18.926048 14.94641-23.656793 30.249955-12.618389 60.532655-25.159006 90.808192-37.71395 221.6164-91.901083 443.233823-183.798073 664.850224-275.699156 11.831466-4.90573 20.134573-3.948939 27.185152 3.198855C884.606765 140.288117 886.416993 145.975653 886.054743 152.46239zM839.570036 196.137099c-0.382717-0.186242-0.765433-0.37146-1.14815-0.555655C713.69314 334.177012 588.965417 472.773603 463.955262 611.68128c2.165316 1.146103 3.730974 2.068102 5.372358 2.830465 27.976168 12.983709 55.401798 27.04189 83.601046 39.676651 76.962859 34.483372 152.834874 71.403237 229.142817 107.351983 1.877767 0.88516 3.791349 1.697665 6.363941 2.844791C805.527708 574.450331 822.54836 385.293203 839.570036 196.137099zM158.005129 466.417849c1.616824 0.87288 2.574638 1.49198 3.608178 1.935072 68.333318 29.305443 136.684032 58.572 204.977441 87.970564 3.091408 1.330298 4.834098 0.431835 7.021927-1.469468C502.166539 443.227684 630.755196 331.636143 759.331573 220.033345c1.224898-1.063215 2.358721-2.233877 3.533476-3.354398-0.201591-0.26299-0.404206-0.525979-0.606821-0.788969C561.042461 299.31604 359.824647 382.742101 158.005129 466.417849zM402.997935 762.605641c0.240477 0.00614 0.479931 0.01228 0.719384 0.01842 0.391926-1.408069 0.854461-2.799766 1.165546-4.225231 10.367115-47.625694 20.662599-95.268784 31.198559-142.857639 0.777713-3.511987 2.682086-7.186679 5.087878-9.866718 108.571764-120.839159 217.258139-241.577011 325.923024-362.333282 0.935302-1.039679 1.749854-2.187829 2.620687-3.284813-1.721201 0.506537-2.987031 1.464351-4.182252 2.501984-90.098018 78.18571-180.190919 156.376537-270.282796 234.56941-35.985586 31.234375-71.985498 62.452377-107.888196 93.78192-1.5104 1.316995-3.119037 3.777023-2.963495 5.554506 1.763157 20.068058 3.860934 40.10644 5.869684 60.153008 3.236718 32.3068 6.464225 64.614623 9.714246 96.921423C400.955416 743.229339 401.991002 752.916978 402.997935 762.605641zM420.887374 783.756357c0.306992 0.152473 0.611937 0.303922 0.917906 0.456395 32.251541-40.325427 64.50206-80.651878 97.083106-121.388674-21.970384-10.965749-43.12724-21.525246-64.709791-32.298614C442.960089 682.164564 431.923732 732.960461 420.887374 783.756357z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-comment" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M345.087 856.925c-3.255 0-6.534-0.696-9.611-2.111-8.151-3.75-13.384-11.902-13.384-20.884v-98.019c0-12.171-9.904-22.073-22.097-22.073h-112.526c-37.546 0-68.085-30.539-68.085-68.063v-410.626c0-37.536 30.539-68.075 68.085-68.075h649.083c37.523 0 68.063 30.539 68.063 68.075v410.626c0 37.523-30.539 68.063-68.063 68.063h-307.868c-5.277 0-10.397 1.886-14.417 5.344l-154.227 132.197c-4.244 3.661-9.566 5.547-14.955 5.547zM187.469 213.064c-12.193 0-22.097 9.904-22.097 22.086v410.626c0 12.171 9.904 22.073 22.097 22.073h112.525c37.546 0 68.085 30.539 68.085 68.063v48.010l116.299-99.682c12.373-10.577 28.092-16.392 44.304-16.392h307.868c12.171 0 22.073-9.904 22.073-22.073v-410.626c0-12.183-9.904-22.086-22.073-22.086h-649.082z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-about" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 59.69866c-249.799276 0-452.30134 202.502064-452.30134 452.30134s202.502064 452.30134 452.30134 452.30134 452.30134-202.502064 452.30134-452.30134S761.799276 59.69866 512 59.69866zM512 916.690996c-223.503377 0-404.690996-181.187619-404.690996-404.690996s181.187619-404.690996 404.690996-404.690996c223.505423 0 404.690996 181.187619 404.690996 404.690996S735.505423 916.690996 512 916.690996zM464.389656 750.053768l95.221712 0L559.611367 416.778288l-95.221712 0L464.389656 750.053768zM464.389656 369.167944l95.221712 0 0-95.221712-95.221712 0L464.389656 369.167944z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-user" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M925.072 866.338c-22.55-58.665-54.879-111.396-96.079-156.727-41.419-45.572-89.732-81.389-143.598-106.458-10.233-4.762-20.581-9.090-31.037-12.991 23.153-13.107 44.673-29.438 63.998-48.763 56.076-56.076 86.959-130.633 86.959-209.936 0-79.303-30.881-153.86-86.959-209.936s-130.634-86.959-209.937-86.959-153.86 30.883-209.937 86.959c-56.076 56.078-86.959 130.633-86.959 209.936 0 79.303 30.883 153.86 86.959 209.936 19.325 19.325 40.846 35.655 63.997 48.763-10.455 3.903-20.804 8.229-31.037 12.991-53.866 25.068-102.179 60.884-143.598 106.458-41.202 45.332-75.248 97.431-96.080 156.727-17.385 49.481-15.568 98.351-16.45 121.174h69.838c-2.304-162.997 152.688-353.823 363.268-353.823 210.579 0 369.644 197.809 370.256 353.823h69.837c-1.243-44.114-0.159-60.62-23.438-121.174zM281.379 331.462c0-125.188 101.85-227.038 227.039-227.038 125.188 0 227.039 101.85 227.039 227.038s-101.851 227.038-227.039 227.038c-125.189 0-227.039-101.85-227.039-227.038z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ask" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.003835 72.890007C269.491296 72.890007 72.893843 269.486502 72.893843 512s196.596494 439.109993 439.109993 439.109993c242.513498 0 439.101363-196.596494 439.101363-439.109993S754.517333 72.890007 512.003835 72.890007zM512.003835 925.612584C283.575131 925.612584 98.39221 740.427745 98.39221 512S283.575131 98.404674 512.003835 98.404674c228.427745 0 413.610667 185.167581 413.610667 413.595326S740.431581 925.612584 512.003835 925.612584zM493.70415 782.781843l35.129528 0 0-46.097258-35.129528 0L493.70415 782.781843zM624.709034 297.937019c-13.66388-11.958172-30.371955-21.226906-50.130936-27.807161-19.758022-6.597513-42.081798-9.879491-66.960779-9.879491-23.914427 0-45.866187 3.908075-65.873498 11.709843-20.006352 7.801768-37.20821 18.900854-51.590232 33.299176-14.398322 14.381064-25.250996 31.58388-32.565693 51.590232-7.322367 20.005393-10.010846 42.205483-8.056809 66.598352l25.613423 0c-0.486112-17.564285 1.715296-33.777618 6.613813-48.670682 4.890846-14.876764 12.105828-27.922217 21.655491-39.154577-10.069333 11.842157 40.077903-64.388315 145.179805-43.178667 51.886502 10.522846 80.436734 60.595296 82.316944 64.768 5.129588 11.47973 7.702052 23.78403 7.702052 36.961798 0 13.673468-3.290607 26.339236-9.878532 38.050037-6.589843 11.709843-14.761708 23.057258-24.517513 34.041288-9.763476 10.966772-20.492464 21.836704-32.203266 32.574322-11.708884 10.721318-22.932614 21.70439-33.661603 32.919491-19.025498 20.006352-30.626996 40.985888-34.767101 62.937648-4.148734 21.969019-5.979086 46.361888-5.484345 73.196824l24.154127 0c0-14.645693 0.478442-29.654772 1.458337-45.026277 0.974142-15.356165 5.599401-29.374801 13.904539-42.074127 10.72803-16.574801 23.419685-31.582921 38.056749-45.009019 14.638022-13.40788 28.780345-26.701663 42.445184-39.879431 13.657169-13.177768 25.250996-27.444734 34.76806-42.81624 9.508434-15.371506 14.266007-33.777618 14.266007-55.251895 0-20.501094-3.653993-39.269633-10.97636-56.356434C648.862202 324.408569 638.365243 309.895191 624.709034 297.937019z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-job" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M512.013 116.492c-218.085 0-395.521 177.418-395.521 395.5 0 218.089 177.436 395.515 395.521 395.515 218.077 0 395.503-177.428 395.503-395.515 0-218.079-177.428-395.5-395.503-395.5zM512.013 871.533c-198.251 0-359.533-161.29-359.533-359.542 0-198.243 161.281-359.524 359.533-359.524 198.243 0 359.524 161.281 359.524 359.524 0.001 198.251-161.281 359.542-359.524 359.542zM464.713 571.514h60.772l-14.617 65.797h157.644c-1.526 16.759-2.894 29.857-4.115 39.299-2.134 18.583-13.703 27.873-34.724 27.873-22.55 0-49.657-0.914-81.341-2.738 4.567 13.097 7.77 25.281 9.597 36.556h81.794c36.859 0 56.812-19.799 59.859-59.403 1.826-19.497 3.501-43.257 5.029-71.284h-153.991l8.222-36.098h189.638v-28.333h-283.767v28.332zM523.203 506.625h167.693v10.511h29.703v-179.127h-98.247v-42.037h-30.608v42.037h-98.246v179.126h29.703v-10.51zM622.356 366.343h68.543v42.037h-68.543v-42.037zM622.356 435.799h68.543v42.497h-68.543v-42.497zM523.203 366.343h68.542v42.037h-68.542v-42.037zM523.203 435.799h68.542v42.497h-68.542v-42.497zM446.432 608.982v-258.18h30.164v-30.612h-180.953v30.612h26.039v282.398c-10.049 1.524-19.799 3.049-29.243 4.567l7.769 35.646c38.386-8.227 76.611-16.299 114.691-24.222v95.506h31.532v-102.356l35.646-7.312c-1.826-13.401-2.894-24.368-3.202-32.901-11.27 2.442-22.087 4.727-32.444 6.857zM414.9 615.382c-21.328 4.266-41.887 8.222-61.689 11.881v-79.054h61.689v67.173zM414.9 518.505h-61.689v-68.998h61.689v68.998zM414.9 419.803h-61.689v-68.998h61.689v68.998z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-topic-top" viewBox="0 0 2139 1024">'+
      ''+
      '<path d="M2138.552066 1023.943581 0 1023.943581 0 0l2138.552066 0L2138.552066 1023.943581zM28.209366 995.734215l2082.133333 0L2110.3427 28.209366 28.209366 28.209366 28.209366 995.734215zM759.847493 398.259835l134.89719 0c24.711405 0 57.321433-0.9027 97.830083-2.65168l0 44.96573c-38.816088-1.748981-71.426116-2.65168-97.830083-2.65168l-142.795813 0-5.303361 37.010689 174.559559 0c-1.748981 44.06303-2.65168 81.130138-2.65168 111.088485l0 169.256198c42.31405 0 79.324738-0.9027 111.088485-2.65168l0 39.662369c-38.816088-1.748981-74.924077-2.65168-108.436804-2.65168l-380.826446 0c-35.261708 0-70.523416 0.9027-105.785124 2.65168L434.593499 752.625895c37.010689 1.748981 74.077796 2.65168 111.088485 2.65168l0-169.256198c0-29.958347-0.9027-67.025455-2.65168-111.088485l153.402534 0 5.303361-37.010689L561.535647 437.922204c-31.763747 0-65.220055 0.9027-100.481763 2.65168L461.053884 395.608154C496.259174 397.357135 529.771901 398.259835 561.535647 398.259835l145.447493 0c1.748981-14.104683 2.65168-27.306667 2.65168-39.662369 17.659063 3.55438 38.816088 5.303361 63.471074 5.303361C767.802534 376.20011 763.401873 387.709532 759.847493 398.259835zM979.372782 295.126391c0 21.157025 0.9027 39.662369 2.65168 55.516033L487.457851 350.642424C489.206832 329.485399 490.109532 310.133774 490.109532 292.474711c0-19.408044-0.9027-41.41135-2.65168-66.122755l494.566612 0C980.275482 251.063361 979.372782 273.969366 979.372782 295.126391zM640.860386 316.283416 640.860386 260.767383 540.378623 260.767383l0 55.516033L640.860386 316.283416zM876.239339 549.010689 876.239339 512l-288.243306 0 0 37.010689L876.239339 549.010689zM876.239339 617.785124 876.239339 583.369697l-288.243306 0 0 34.359008L876.239339 617.728705zM876.239339 683.907879l0-26.460386-288.243306 0 0 26.460386L876.239339 683.907879zM876.239339 755.277576l0-34.359008-288.243306 0 0 34.359008L876.239339 755.277576zM783.656198 316.283416 783.656198 260.767383l-105.785124 0 0 55.516033L783.656198 316.283416zM929.103691 316.283416 929.103691 260.767383 825.970248 260.767383l0 55.516033L929.103691 316.283416zM1101.01157 252.812342c21.157025 1.748981 42.31405 2.65168 63.471074 2.65168L1241.212121 255.464022c21.157025 0 43.216749-0.9027 66.122755-2.65168l0 44.96573c-28.209366-1.748981-51.115372-2.65168-68.774435-2.65168l0 399.331791c0 35.261708-11.001653 56.418733-33.061377 63.471074-22.059725 7.052342-48.06876 14.104683-78.027107 21.157025-3.55438-22.906006-10.606722-44.06303-21.157025-63.471074 26.460386 0 46.714711-0.9027 60.819394-2.65168 14.104683-1.748981 21.157025-14.104683 21.157025-37.010689l0-380.826446c-35.261708 0-64.373774 0.9027-87.27978 2.65168L1101.01157 252.812342zM1278.22281 763.232617c49.366391-10.606722 88.57741-24.711405 117.689477-42.31405 29.112066-17.602645 48.06876-39.211019 56.870083-64.768705 8.801322-25.557686 14.556033-56.418733 17.207713-92.58314 2.65168-36.107989 3.10303-73.626446 1.297631-112.386116 21.157025 3.55438 41.41135 6.206061 60.819394 7.955041-5.303361 19.408044-8.801322 46.263361-10.606722 80.678788s-6.149642 70.523416-13.201983 108.436804c-7.052342 37.913388-27.306667 70.974766-60.819394 99.184132s-77.575758 51.961653-132.24551 71.426116C1308.181157 799.340606 1295.825455 780.835262 1278.22281 763.232617zM1458.029311 361.249146c3.55438-29.958347 6.149642-59.070413 7.955041-87.27978l-50.269091 0c-21.157025 0-50.269091 0.9027-87.27978 2.65168L1328.435482 231.655317c35.261708 1.748981 64.373774 2.65168 87.27978 2.65168l193.064904 0c29.958347 0 59.973113-0.9027 89.93146-2.65168l0 44.96573c-29.958347-1.748981-59.973113-2.65168-89.93146-2.65168l-87.27978 0c-5.303361 28.209366-9.704022 57.321433-13.201983 87.27978L1664.352617 361.249146c-1.748981 26.460386-2.65168 76.673058-2.65168 150.750854s0.9027 126.039449 2.65168 156.054215l-52.920771 0L1611.431846 400.911515l-214.221928 0 0 272.389642-50.269091 0c1.748981-29.958347 2.65168-81.976419 2.65168-156.054215 0-75.770358-0.9027-127.844848-2.65168-156.054215L1458.029311 361.192727zM1629.93719 712.963526c28.209366 21.157025 55.516033 42.31405 81.976419 63.471074-17.659063 15.853664-32.610028 31.763747-44.96573 47.61741-29.958347-31.763747-55.516033-55.967383-76.673058-72.723747s-44.06303-33.061377-68.774435-48.915041c17.659063-14.104683 31.763747-27.306667 42.31405-39.662369C1579.724518 675.050138 1601.727824 691.806501 1629.93719 712.963526z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-topic-good" viewBox="0 0 2139 1024">'+
      ''+
      '<path d="M2138.495647 1023.943581 0 1023.943581 0 0l2138.495647 0L2138.495647 1023.943581zM28.209366 995.734215l2082.076915 0L2110.286281 28.209366 28.209366 28.209366 28.209366 995.734215zM527.12022 272.502479c0-29.958347-0.9027-53.767052-2.65168-71.426116l52.920771 0c-1.748981 31.763747-2.65168 56.418733-2.65168 74.077796L574.737631 407.343251c28.209366 0 53.767052-0.9027 76.673058-2.65168l0 47.61741C628.504683 450.56 602.946997 449.6573 574.737631 449.6573l0 259.187658c0 28.209366 0.9027 62.568375 2.65168 103.133444L524.46854 811.978402c1.748981-40.565069 2.65168-74.924077 2.65168-103.133444l0-169.256198c-15.853664 40.565069-40.565069 84.628099-74.077796 132.24551-12.355702-10.606722-25.557686-22.059725-39.662369-34.359008 17.659063-19.408044 35.713058-45.360661 54.218402-78.027107C486.103802 526.781708 501.562534 490.222369 513.861818 449.6573c-31.763747 0-59.973113 0.9027-84.628099 2.65168L429.233719 404.69157C453.945124 406.49697 486.555152 407.343251 527.12022 407.343251L527.12022 272.502479zM516.513499 359.72584C505.963196 365.029201 492.704793 372.984242 476.851129 383.534545c-14.104683-28.209366-32.610028-59.916694-55.516033-95.234821 15.853664-8.801322 29.112066-16.756364 39.662369-23.808705C478.60011 291.007824 497.161873 322.715152 516.513499 359.72584zM622.298623 386.186226c-14.104683-7.052342-28.209366-12.299284-42.31405-15.853664 17.659063-37.010689 32.610028-73.118678 44.96573-108.436804 19.408044 7.052342 35.261708 13.201983 47.61741 18.505344C647.856309 331.572893 631.156364 366.778182 622.298623 386.186226zM685.769697 587.206171c-12.355702 8.857741-25.557686 18.505344-39.662369 29.112066-19.408044-35.261708-41.41135-66.122755-66.122755-92.58314 14.104683-8.801322 26.460386-18.505344 37.010689-29.112066C641.706667 526.386777 664.612672 557.191405 685.769697 587.206171zM820.666887 261.895758c0-21.157025-0.9027-41.41135-2.65168-60.819394l52.920771 0C869.130579 223.982369 868.284298 244.293113 868.284298 261.895758l58.167713 0c29.958347 0 56.418733-0.9027 79.324738-2.65168l0 42.31405c-24.711405-1.748981-51.115372-2.65168-79.324738-2.65168L868.284298 298.906446l0 50.269091 37.010689 0c28.209366 0 55.516033-0.9027 81.976419-2.65168l0 42.31405c-26.460386-1.748981-54.669752-2.65168-84.628099-2.65168L868.284298 386.186226l0 44.96573 63.471074 0c31.763747 0 66.122755-0.9027 103.133444-2.65168l0 42.31405c-35.261708-1.748981-69.620716-2.65168-103.133444-2.65168l-158.705895 0c-28.209366 0-62.568375 0.9027-103.133444 2.65168l0-42.31405c37.010689 1.748981 70.523416 2.65168 100.481763 2.65168l50.269091 0L820.666887 386.186226l-39.662369 0c-26.460386 0-51.115372 0.9027-74.077796 2.65168l0-42.31405c24.711405 1.748981 45.86843 2.65168 63.471074 2.65168l50.269091 0L820.666887 298.906446l-42.31405 0c-28.209366 0-58.167713 0.9027-89.93146 2.65168l0-42.31405c31.763747 1.748981 61.722094 2.65168 89.93146 2.65168L820.666887 261.895758zM981.968044 595.104793l0 158.705895c0 26.460386-8.349972 42.31405-25.106336 47.61741s-36.559339 9.647603-59.521763 13.201983c-5.303361-21.157025-13.201983-38.816088-23.808705-52.920771 24.711405 0 41.016419-1.297631 48.915041-3.949311s11.904353-10.155372 11.904353-22.454656l0-26.460386-179.86292 0 0 100.481763L706.926722 809.326722c1.748981-49.366391 2.65168-104.036143 2.65168-163.952837 0-59.916694-0.9027-108.436804-2.65168-145.447493l277.693003 0C982.870744 533.439118 981.968044 565.146446 981.968044 595.104793zM934.407052 581.90281 934.407052 536.93708l-179.86292 0 0 44.96573L934.407052 581.90281zM934.407052 671.83427 934.407052 618.913499l-179.86292 0 0 52.920771L934.407052 671.83427zM1296.671736 256.592397c-7.052342 12.355702-15.853664 25.557686-26.460386 39.662369l0 171.907879c0 28.209366 0.9027 58.167713 2.65168 89.93146L1214.695317 558.094105c1.748981-33.456309 2.65168-63.471074 2.65168-89.93146L1217.346997 354.478898c-7.052342 12.355702-17.659063 26.009036-31.763747 41.016419-14.104683 15.007383-28.209366 30.409697-42.31405 46.263361-15.853664-15.853664-30.861047-29.112066-44.96573-39.662369 24.711405-17.602645 47.166061-37.913388 67.420386-60.819394 20.254325-22.906006 36.559339-42.708981 48.915041-59.521763 12.355702-16.756364 22.454656-33.456309 30.409697-50.269091 7.955041-16.756364 13.653333-30.409697 17.207713-41.016419 17.659063 10.606722 38.816088 21.157025 63.471074 31.763747C1313.428099 232.783691 1303.724077 244.293113 1296.671736 256.592397zM1373.401212 613.610138c0-29.958347-0.9027-54.613333-2.65168-74.077796l55.516033 0c-1.748981 15.853664-2.65168 40.565069-2.65168 74.077796l190.413223 0c26.460386 0 57.321433-0.9027 92.58314-2.65168l0 52.920771c-33.512727-1.748981-63.471074-2.65168-89.93146-2.65168l-193.064904 0c0 72.328815 0.9027 119.889807 2.65168 142.795813l-55.516033 0c1.748981-24.711405 2.65168-72.272397 2.65168-142.795813l-193.064904 0c-22.906006 0-48.463691 0.9027-76.673058 2.65168L1103.663251 611.014876c28.209366 1.748981 54.669752 2.65168 79.324738 2.65168L1373.401212 613.666556zM1481.838017 272.502479l0 63.471074c26.460386-12.299284 51.566722-25.557686 75.375427-39.662369 23.808705-14.104683 49.817741-34.359008 78.027107-60.819394 10.606722 14.104683 25.557686 30.861047 44.96573 50.269091-22.906006 8.857741-53.767052 23.808705-92.58314 44.96573s-74.077796 39.662369-105.785124 55.516033l0 68.774435c0 22.906006 12.355702 34.359008 37.010689 34.359008l92.58314 0c22.906006 0 36.164408-5.303361 39.662369-15.853664s7.052342-28.209366 10.606722-52.920771c21.157025 12.355702 41.41135 21.157025 60.819394 26.460386-8.801322 33.512727-18.505344 56.418733-29.112066 68.774435-10.606722 12.355702-25.557686 18.505344-44.96573 18.505344l-161.301157 0c-37.010689 0-56.418733-18.505344-58.167713-55.516033L1428.973664 407.343251c-37.010689 17.659063-65.220055 30.014766-84.628099 37.010689-5.303361-15.853664-15.007383-30.804628-29.112066-44.96573 33.512727-7.052342 71.426116-20.254325 113.740165-39.662369L1428.973664 277.749421c0-33.456309-0.9027-60.819394-2.65168-81.976419l60.819394 0C1483.586997 216.930028 1481.838017 242.487713 1481.838017 272.502479z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-click" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 792.484c-179.078 0-291.271-73.357-353.841-135.926-69.041-66.884-94.932-133.769-97.090-138.084-2.157-4.316-2.157-10.787 0-17.26 2.157-2.157 28.048-69.041 97.090-138.084 62.57-58.254 174.763-131.612 353.841-131.612s291.271 73.357 353.841 135.926c69.041 66.884 94.932 133.769 97.090 138.084 2.157 4.316 2.157 10.787 0 17.26-2.157 2.157-28.048 69.041-97.090 138.084-62.57 58.254-174.763 131.612-353.841 131.612zM102.063 512c19.419 43.151 125.138 237.332 409.937 237.332s390.519-194.181 409.937-237.332c-19.419-43.151-125.138-237.332-409.937-237.332-282.641 0-390.519 194.181-409.937 237.332zM512 684.606c-94.932 0-172.606-77.673-172.606-172.606s77.673-172.606 172.606-172.606 172.606 77.673 172.606 172.606-77.673 172.606-172.606 172.606zM512 380.388c-73.357 0-131.612 58.254-131.612 131.612s58.254 131.612 131.612 131.612 131.612-58.254 131.612-131.612-58.254-131.612-131.612-131.612z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-good" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.353 263.988c-88.46 0-160.523 69.474-160.523 155.021 0 85.439 71.954 155.021 160.523 155.021s160.523-69.474 160.523-155.021c0-85.548-71.954-155.021-160.523-155.021zM510.274 540.263c-68.071 0-119.961-52.969-119.961-121.039s51.889-119.961 119.961-119.961 120.068 51.889 120.068 119.961-51.998 121.039-120.068 121.039z"  ></path>'+
      ''+
      '<path d="M749.763 586.113c40.67-60.736 61.814-94.394 61.922-170.879 0.217-159.335-134.416-289.006-299.686-289.006-0.108 0-0.108 0-0.217 0-0.108 0-0.108 0-0.217 0-41.21 0-80.369 8.091-116.077 22.763-107.554 43.907-183.178 146.715-183.178 266.243 0 68.502 22.115 134.633 68.396 187.061l-117.804 175.841 152 24.705 91.050 120.608 105.397-174.763 105.613 169.369 91.050-111.978 159.552-26.862-117.804-193.103zM403.474 860.338l-70.66-88.676-114.243-17.369 87.274-133.121c51.674 50.703 116.186 78.751 194.935 81.447l-97.307 157.717zM250.72 415.664c0-140.674 116.724-254.701 260.635-254.701 144.018 0 260.635 114.027 260.635 254.701s-116.617 254.809-260.635 254.809c-143.909 0-260.635-114.135-260.635-254.809zM693.344 773.821l-72.818 89.755-97.198-163.22c78.643-2.913 149.519-35.383 201.085-86.303l85.332 143.478-116.4 16.289z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-arrow-right" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M324.318 827.462l45.584 45.584 360.823-360.823-360.822-360.804-45.584 45.584 315.229 315.227z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
