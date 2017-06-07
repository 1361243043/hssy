
                [field:pagestyle runphp='yes'] @me= (@me==3 ? '<li>' : '');[/field:pagestyle]
                <a href='[field:linkurl/]' [field:pagestyle runphp='yes'] @me= (@me==3 ? 'class="pic"' : ''); [/field:pagestyle]>
                  <img src='[field:imgsrc/]' id='bigimg' [field:imgwidth /]  border='0' />
                </a>
                
                	[field:title /]
                </a>
               
                    </li>
                </ul><!--.rightImg-->
			</div><!--.cen_right-->
		</div><!--#center-->
{dede:include filename="footer.html"