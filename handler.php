<?php
$info = $_POST;

$res = file_get_contents('results.json');
$data = json_decode($res, true);
$sortedData = sortedArray($data);
function getResult($data, $info, $json){
    $count = 0;
    if(isset($info)){
        foreach($data as $key){
            if($key <= $info){
                $count++;
            }
        };
    }
    $json['player'.count($json)+1] = (int)$info;
    file_put_contents('results.json', json_encode($json, true));
    return 100 - (100/ count($data) * $count);
    
}

function sortedArray($array){
    sort($array);
    return $array;
}

$result['count'] = getResult($sortedData, $info['count'], $data);


echo json_encode($result, true);

?>

