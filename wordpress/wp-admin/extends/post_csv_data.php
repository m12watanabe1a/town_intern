<?php
require('../../wp-blog-header.php');
$file = new SplFileObject('csv/toilet.csv');
$file->setFlags(SplFileObject::READ_CSV);
foreach ($file as $line) {
    $records[] = $line;
}
echo "<table>";
echo "<tr><th>施設名</th><th>男性トイレ数</th><th>女性トイレ数</th><th>男女共用トイレ数</th><th>バリアフリートイレ数</th><th>緯度</th><th>経度</th></tr>";
for ($i=1 ; $i<count($records);$i++){
    echo "<tr><td>";
    echo $records[$i][0];
    echo "</td><td>";
    echo $records[$i][2];
    echo "</td><td>";
    echo $records[$i][3];
    echo "</td><td>";
    echo $records[$i][4];
    echo "</td><td>";
    echo $records[$i][5];
    echo "</td><td>";
    echo $records[$i][12];
    echo "</td><td>";
    echo $records[$i][13];
    echo "</td></tr>";
    // var_dump($records[$i][0]);

    $post_value = array(
        'post_title' => $records[$i][0], //post title
        'post_content' => '[cft format=0]', //post content
        'post_status'    => 'publish',
        'post_category'  => array(2),
    );

    $insert_id = wp_insert_post($post_value);

    if( $insert_id != 0 ){
        _log($insert_id);
        update_post_meta($insert_id, 'facility_name',$records[$i][0]);
        update_post_meta($insert_id, 'latitude',$records[$i][12]);
        update_post_meta($insert_id, 'longitude',$records[$i][13]);
        update_post_meta($insert_id, 'male',$records[$i][2] == null ? 0 : $records[$i][2]);
        update_post_meta($insert_id, 'female',$records[$i][3] == null ? 0 : $records[$i][3]);
        update_post_meta($insert_id, 'unisex',$records[$i][4] == null ? 0 : $records[$i][4]);
        update_post_meta($insert_id, 'universal',$records[$i][5] == null ? 0 : $records[$i][5]);
        
    }
    else{
        var_dump('Error. Insert Id was Zero.');
    }
}
echo "</table>";
?>